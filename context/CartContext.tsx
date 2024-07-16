import React, { createContext, useContext, useReducer, useEffect, ReactNode, useState } from 'react'
import { toast } from 'react-toastify';
import { useAuth } from '@/context/authContext';
import axiosInstance from '@/utils/axiosInstance';
import Cookies from 'js-cookie';

interface CartItem {
    id: number;
    title: string;
    price: number;
    sale_price?: number;
    image_path: string;
    quantity: number;
    size_id?: number;
    size_name?: string;
    color_id?: number;
    color_name?: string;
}

interface CartState {
    items: CartItem[];
}

interface CartAction {
    type: 'ADD_ITEM' | 'REMOVE_ITEM' | 'CLEAR_CART' | 'SET_CART' | 'UPDATE_QUANTITY';
    payload?: any;
    itemId?: number;
    quantity?: number;
    size_id?: number;
    color_id?: number;
}

const CartContext = createContext<CartState & {
    addItem: (item: CartItem) => void;
    removeItem: (id: number, color_id: number | undefined, size_id: number | undefined) => void;
    updateQuantity: (id: number, quantity: number, size_id?: number, color_id?: number) => void;
    clearCart: () => void;
    totalItems: () => number;
    totalPrice: () => number;
    cartLoading: boolean;
} | undefined>(undefined);

const initialState: CartState = {
    items: [],
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_ITEM':
            const existingItemIndex = state.items.findIndex(item =>
                item.id === action.payload.id &&
                item.size_id === action.payload.size_id &&
                item.color_id === action.payload.color_id
            );
            if (existingItemIndex !== -1) {
                const updatedItems = [...state.items];
                updatedItems[existingItemIndex].quantity += action.payload.quantity;
                const newState = { ...state, items: updatedItems };
                saveCartToLocalStorage(newState);

                return newState;
            } else {
                const newState = { ...state, items: [...state.items, action.payload] };
                saveCartToLocalStorage(newState);
                return newState;
            }

        case 'UPDATE_QUANTITY':
            const updatedItemsForQuantity = state.items.map(item => {
                if (item.id === action.itemId &&
                    item.size_id === action.size_id &&
                    item.color_id === action.color_id
                ) {
                    return { ...item, quantity: action.quantity! };
                }
                return item;
            });

            const newStateForQuantity = { ...state, items: updatedItemsForQuantity };
            saveCartToLocalStorage(newStateForQuantity);
            return newStateForQuantity;

        case 'REMOVE_ITEM':
            const filteredItems = state.items.filter(item =>
                !(item.id === action.itemId &&
                    item.size_id === action.size_id &&
                    item.color_id === action.color_id)
            );
            const newStateRemove = { ...state, items: filteredItems };
            saveCartToLocalStorage(newStateRemove);
            return newStateRemove;

        case 'CLEAR_CART':
            saveCartToLocalStorage(initialState);
            return initialState;

        case 'SET_CART':
            return { ...state, items: action.payload };

        default:
            return state;
    }
};

const saveCartToLocalStorage = (cartState: CartState) => {
    if(!Cookies.get('access_token')) {
        localStorage.setItem('cart', JSON.stringify(cartState));
    }
};

const loadCartFromLocalStorage = (): CartState => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : initialState;
};

interface CartProviderProps {
    children: ReactNode;
}

const transformBackendData = (backendItems: any[]): CartItem[] => {
    return backendItems.map(item => ({
        id: item.product_id,
        title: item.product.title, // Set the title as per your requirement
        price: item.product.price, // Set the price as per your requirement
        sale_price: item.product.sale_price, // Set the sale price if available
        image_path: item.product.image_path[0], // Set the image path as per your requirement
        quantity: item.quantity,
        size_id: item.size_id,
        size_name: item.size ? item.size.name : undefined,
        color_id: item.color_id,
        color_name: item.color ? item.color.name : undefined
    }));
};

export const CartProvider = ({ children }: CartProviderProps) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const [cartLoading, setCartLoading] = useState(true);

    const { isAuthenticated, loading } = useAuth();

    useEffect(() => {
        const initializeCart = async () => {
            if (loading) {
                return; // Wait for authentication to complete
            }

            const storedCart: any = loadCartFromLocalStorage();
            if (isAuthenticated) {
                try {
                    if (storedCart.items.length > 0) {
                        await syncCartWithBackend(storedCart);
                    }
                    const { data } = await axiosInstance.get('/cart');
                    const transformedCartItems = transformBackendData(data);
                    dispatch({ type: 'SET_CART', payload: transformedCartItems });

                } catch (error) {
                    console.error('Error fetching cart from backend:', error);
                }
            } else {
                dispatch({ type: 'SET_CART', payload: storedCart.items });
            }
            setCartLoading(false);
        };
        initializeCart();
    }, [isAuthenticated, loading]);

    const syncCartWithBackend = async (cartState?: CartState) => {
        if (isAuthenticated) {
            try {
                const cartToSync = cartState ? cartState.items : state.items;
                await axiosInstance.post('/cart/sync', { cart: cartToSync });
                localStorage.removeItem('cart');
                const { data } = await axiosInstance.get('/cart');
                const transformedCartItems = transformBackendData(data);
                dispatch({ type: 'CLEAR_CART' });
                dispatch({ type: 'SET_CART', payload: transformedCartItems });
            } catch (error) {
            }
        }
    };

    const addItem = async (item: CartItem) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
        if (isAuthenticated) {
            await axiosInstance.post('/cart/add', {
                id: item.id,
                quantity: item.quantity,
                size_id: item.size_id,
                color_id: item.color_id,
            });
        }
    };

    const removeItem = async (id: number, color_id: number | undefined, size_id: number | undefined) => {
        try {
            dispatch({ type: 'REMOVE_ITEM', itemId: id, color_id: color_id, size_id: size_id });
            if (isAuthenticated) {
                await axiosInstance.post('/cart/remove', { id, color_id, size_id });
            }
        } catch (error) {
            console.error('Error removing item from cart:', error);
            toast.error('Error removing item from cart');
        }
    };

    const updateQuantity = (id: number, quantity: number, size_id?: number, color_id?: number) => {
        dispatch({ type: 'UPDATE_QUANTITY', itemId: id, quantity, size_id, color_id });
        if (isAuthenticated && loadCartFromLocalStorage().items.length > 0) {
            syncCartWithBackend({ ...state, items: state.items.map(item => {
                    if (item.id === id && item.size_id === size_id && item.color_id === color_id) {
                        return { ...item, quantity };
                    }
                    return item;
                }) });
        }

    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
        syncCartWithBackend(initialState);
    };

    const totalItems = () => state.items.reduce((acc, item) => acc + (item.quantity || 1), 0);

    const totalPrice = () => state.items.reduce((acc, item) => acc + (item.quantity * ((item.sale_price || item.price) || 0)), 0);

    return (
        <CartContext.Provider value={{ ...state, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice, cartLoading }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
