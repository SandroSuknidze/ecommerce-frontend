import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { useAuth } from '@/context/authContext';
import { Loader } from '@/components/Loader'

const requireGuest = (WrappedComponent: any) => {
    const ComponentWithAuth = (props: any) => {
        const { isAuthenticated, loading } = useAuth();
        const router = useRouter();


        useEffect(() => {
            if (!loading && isAuthenticated) {
                router.push('/');
            }
        }, [isAuthenticated, loading, router]);

        if (loading || isAuthenticated) {
            return (
                <Loader />
            );
        }

        // Otherwise render the wrapped component
        return <WrappedComponent {...props} />;
    };

    ComponentWithAuth.displayName = `RequireGuest(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return ComponentWithAuth;
};


export default requireGuest;
