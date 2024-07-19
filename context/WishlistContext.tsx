import { createContext, ReactNode, useContext, useEffect, useReducer, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '@/context/authContext';
import axiosInstance from '@/utils/axiosInstance';
import Cookies from 'js-cookie';
import { withTranslations } from '@/utils/i18nHelper';
import { useTranslation } from 'next-i18next';

export const getStaticProps = withTranslations(['common']);

interface WishlistItem {
    id: number;
    title: string;
    price: number;
    sale_price?: number;
    image_path: string;
    rating: number;
    colors: any;
    color_id?: number;
    color_name: string;
    size_name: string;
    size_id?: number;
}

interface WishlistState {
    items: WishlistItem[];
}

interface WishlistAction {
    type: 'ADD_ITEM' | 'REMOVE_ITEM' | 'CLEAR_WISHLIST' | 'SET_WISHLIST';
    payload?: any;
    itemId?: number;
    color_id?: number;
    size_id?: number;
}

const WishlistContext = createContext<WishlistState & {
    addWishlistItem: (item: WishlistItem) => void;
    removeWishlistItem: (id: number, color_id?: number, size_id?: number) => void;
    clearWishlist: () => void;
    totalWishlistItems: () => number;
    wishlistLoading: boolean;
} | undefined>(undefined);

const initialState: WishlistState = {
    items: [],
};

const wishlistReducer = (state: WishlistState, action: WishlistAction): WishlistState => {
    switch (action.type) {
        case 'ADD_ITEM':
            const existingItemIndex = state.items.findIndex(item =>
                item.id === action.payload.id
            );
            if (existingItemIndex !== -1) {
                return state;
            } else {
                const newState = { ...state, items: [...state.items, action.payload] };
                saveWishlistToLocalStorage(newState);
                return newState;
            }

        case 'REMOVE_ITEM':
            const filteredItems = state.items.filter(item =>
                !(item.id === action.itemId)
            );
            const newStateRemove = { ...state, items: filteredItems };
            saveWishlistToLocalStorage(newStateRemove);
            return newStateRemove;

        case 'CLEAR_WISHLIST':
            saveWishlistToLocalStorage(initialState);
            return initialState;

        case 'SET_WISHLIST':
            return { ...state, items: action.payload };

        default:
            return state;
    }
};

const saveWishlistToLocalStorage = (wishlistState: WishlistState) => {
    if (!Cookies.get('access_token')) {
        localStorage.setItem('wishlist', JSON.stringify(wishlistState));
    }
};

const loadWishlistFromLocalStorage = (): WishlistState => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : initialState;
};

interface WishlistProviderProps {
    children: ReactNode;
}

const transformBackendData = (backendItems: any[]): WishlistItem[] => {
    return backendItems.map(item => ({
        id: item.product_id,
        title: item.product.title,
        price: item.product.price,
        sale_price: item.product.sale_price,
        image_path: item.product.image_path[0],
        colors: item.colors,
        color_id: item.color_id,
        size_id: item.size_id,
        color_name: item.color_name,
        size_name: item.size_name,
        rating: item.product.rating,
    }));
};

export const WishlistProvider = ({ children }: WishlistProviderProps) => {
    const [state, dispatch] = useReducer(wishlistReducer, initialState);
    const [wishlistLoading, setWishlistLoading] = useState(true);
    const { t } = useTranslation('common');
    const { isAuthenticated, loading } = useAuth();

    useEffect(() => {
        const initializeWishlist = async () => {
            if (loading) {
                return; // Wait for authentication to complete
            }

            const storedWishlist: any = loadWishlistFromLocalStorage();
            if (isAuthenticated) {
                try {
                    if (storedWishlist.items.length > 0) {
                        await syncWishlistWithBackend(storedWishlist);
                    }
                    const { data } = await axiosInstance.get('/wishlist');
                    const transformedWishlistItems = transformBackendData(data);
                    dispatch({ type: 'SET_WISHLIST', payload: transformedWishlistItems });

                } catch (error) {
                    console.error('Error fetching wishlist from backend:', error);
                }
            } else {
                dispatch({ type: 'SET_WISHLIST', payload: storedWishlist.items });
            }
            setWishlistLoading(false);
        };
        initializeWishlist();
    }, [isAuthenticated, loading]);

    const syncWishlistWithBackend = async (wishlistState?: WishlistState) => {
        if (isAuthenticated) {
            try {
                const wishlistToSync = wishlistState ? wishlistState.items : state.items;
                await axiosInstance.post('/wishlist/sync', { wishlist: wishlistToSync });
                localStorage.removeItem('wishlist');
                const { data } = await axiosInstance.get('/wishlist');
                const transformedWishlistItems = transformBackendData(data);
                dispatch({ type: 'CLEAR_WISHLIST' });
                dispatch({ type: 'SET_WISHLIST', payload: transformedWishlistItems });
            } catch (error) {
                console.error('Error syncing wishlist with backend:', error);
                // toast.error('Error syncing wishlist with backend');
            }
        }
    };

    const addWishlistItem = async (item: WishlistItem) => {
        const existingItemIndex = state.items.findIndex(existingItem =>
            existingItem.id === item.id
        );

        if (existingItemIndex !== -1) {
            toast.error(t('itemExists'), {
                position: 'top-center'
            });
        } else {
            dispatch({ type: 'ADD_ITEM', payload: item });
            toast.success(t('itemAdded'), {
                position: 'top-center'
            });
            if (isAuthenticated) {
                await axiosInstance.post('/wishlist/add', {
                    id: item.id,
                    color_id: item.color_id,
                    size_id: item.size_id,
                    colors: item.colors,
                });
            }
        }
    };

    const removeWishlistItem = async (id: number) => {
        try {
            dispatch({ type: 'REMOVE_ITEM', itemId: id });
            if (isAuthenticated) {
                await axiosInstance.post('/wishlist/remove', { id });
            }
        } catch (error) {
            console.error('Error removing item from wishlist:', error);
            toast.error('Error removing item from wishlist');
        }
    };

    const clearWishlist = () => {
        dispatch({ type: 'CLEAR_WISHLIST' });
        syncWishlistWithBackend(initialState);
    };

    const totalWishlistItems = () => state.items.length;

    return (
        <WishlistContext.Provider value={{ ...state, addWishlistItem, removeWishlistItem, clearWishlist, totalWishlistItems, wishlistLoading }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
};
