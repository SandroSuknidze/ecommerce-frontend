import { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import axiosInstance from '@/utils/axiosInstance'

type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
};

type AuthContextType = {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    login: (userData: User) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = Cookies.get('access_token');
        if (token) {
            axiosInstance.get('/validate-token', {
                headers: { Authorization: `Bearer ${token}` }
            }).then(response => {
                if (response.data.valid) {
                    setIsAuthenticated(true);
                    setUser(response.data.user);
                } else {
                    setIsAuthenticated(false); // Ensure to set isAuthenticated to false if token is invalid
                    setUser(null);
                }
                setLoading(false); // Update loading state after authentication check
            }).catch(() => {
                setIsAuthenticated(false);
                setUser(null);
                setLoading(false);
            });
        } else {
            setIsAuthenticated(false);
            setUser(null);
            setLoading(false);
        }
    }, []);

    const login = (user: any) => {
        setIsAuthenticated(true);
        setUser(user);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('cart');
        Cookies.remove('access_token');
        Cookies.remove('user');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
