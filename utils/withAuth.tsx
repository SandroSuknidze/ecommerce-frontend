import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axiosInstance from '@/utils/axiosInstance'
import { useAuth } from '@/context/authContext'

const withAuth = (WrappedComponent: any) => {
    const ComponentWithAuth = (props: any) => {
        const { isAuthenticated, login } = useAuth()
        const router = useRouter();
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const token = Cookies.get('access_token');
            if (token) {
                axiosInstance.get('/validate-token', {
                    headers: { Authorization: `Bearer ${token}` },
                }).then(response => {
                    if (response.data.valid) {
                        login(response.data.user);
                        setLoading(false);
                    } else {
                        router.push('/');
                    }
                }).catch(() => {
                    router.push('/');
                });
            } else {
                router.push('/');
            }
        }, []);

        if (loading) {
            return <p style={{ minHeight: '573px'}}></p>;
        }

        return <WrappedComponent {...props} />;
    };

    // Set a display name for better debugging
    ComponentWithAuth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return ComponentWithAuth;
};

export default withAuth;
