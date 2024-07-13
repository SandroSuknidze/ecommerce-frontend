import React from 'react';
import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

interface CartItem {
    id: string;
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
    itemId?: string;
    quantity?: number;
    size_id?: number;
    color_id?: number;
}

const CartContext = createContext<CartState & {
    addItem: (item: CartItem) => void;
    removeItem: (id: string, color_id: number, size_id: number) => void;
    updateQuantity: (id: string, quantity: number, size_id?: number, color_id?: number) => void;
    clearCart: () => void;
    totalItems: () => number;
    totalPrice: () => number;
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

// Utility function to save cart to localStorage
const saveCartToLocalStorage = (cartState: CartState) => {
    localStorage.setItem('cart', JSON.stringify(cartState));
};

// Utility function to load cart from localStorage
const loadCartFromLocalStorage = (): CartState => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : initialState;
};

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        const storedCart = loadCartFromLocalStorage();
        if (storedCart) {
            dispatch({ type: 'SET_CART', payload: storedCart.items });
        }
    }, []);

    const addItem = (item: CartItem) => {
        dispatch({
            type: 'ADD_ITEM',
            payload: item,
        });
    };

    const removeItem = (id: string, color_id: number, size_id: number) => {
        dispatch({
            type: 'REMOVE_ITEM',
            itemId: id,
            color_id: color_id,
            size_id: size_id,
        });
    };

    const updateQuantity = (id: string, quantity: number, size_id?: number, color_id?: number) => {
        dispatch({
            type: 'UPDATE_QUANTITY',
            itemId: id,
            quantity: quantity,
            size_id: size_id,
            color_id: color_id,
        });
    };

    const clearCart = () => {
        dispatch({
            type: 'CLEAR_CART',
        });
    };

    const totalItems = () => {
        return state.items.reduce((acc, item) => acc + (item.quantity || 1), 0);
    };

    const totalPrice = () => {
        return state.items.reduce((acc, item) => acc + (item.quantity * (item.price || 0)), 0);
    }

    return (
        <CartContext.Provider value={{ ...state, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}>
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

// Example component to render CartItems
const CartItemList = () => {
    const { items } = useCart();

    return (
        <ul>
            {items.map((item, index) => (
                <li key={`${item.id}-${item.size_id}-${item.color_id}`}>
                    {item.title} - {item.quantity}
                </li>
            ))}
        </ul>
    );
};
