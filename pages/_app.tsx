import '../app/globals.css';
import { Jost } from 'next/font/google';
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { AppProps } from 'next/app';
import { ComponentType, JSX, useEffect } from 'react'
import { AuthProvider, useAuth } from '@/context/authContext'
const jost = Jost({ subsets: ['latin'] })


interface MyAppProps extends AppProps {
    Component: ComponentType<AppProps['Component']> & { authRequired?: boolean };
    pageProps: AppProps['pageProps'];
}

function MyApp({ Component, pageProps }: MyAppProps) {
    return (
        <div className={jost.className}>
            <AuthProvider>
                <ToastContainer />
                <Header />
                <Component {...pageProps}/>
                <Footer />
            </AuthProvider>
        </div>
    );
}

export default MyApp;
