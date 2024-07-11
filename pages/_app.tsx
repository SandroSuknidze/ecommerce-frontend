import '../app/globals.css';
import { Jost } from 'next/font/google';
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { AppProps } from 'next/app';
import { ComponentType, JSX, useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import axiosInstance from '@/utils/axiosInstance'
import { AuthProvider, useAuth } from '@/context/authContext'
import { NextComponentType, NextPageContext } from 'next'
import withAuth from '@/utils/withAuth'
import { router } from 'next/client'
import { Loader } from '@/components/Loader'

const jost = Jost({ subsets: ['latin'] })



interface MyAppProps extends AppProps {
    Component: ComponentType<AppProps['Component']> & { authRequired?: boolean };
    pageProps: AppProps['pageProps'];
}

function MyApp({ Component, pageProps }: MyAppProps) {
    // const { loading } = useAuth(); // Access loading state from useAuth
    //
    // useEffect(() => {
    //     // Optional: You can use loading state to handle loading effects across your app
    // }, [loading]);
    return (
        <div className={jost.className}>
            <AuthProvider>
                <ToastContainer />
                <Header />
                {/*{loading ? (*/}
                {/*    <Loader />*/}
                {/*) : (*/}
                    <Component {...pageProps}/>
                {/*)}*/}

                {/*<Component {...pageProps}/>*/}
                <Footer />
            </AuthProvider>
        </div>
    );
}

export default MyApp;
