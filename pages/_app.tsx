import '../app/globals.css';
import { Jost } from 'next/font/google';
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { AppProps } from 'next/app';
import { ComponentType } from 'react';
import { AuthProvider } from '@/context/authContext';

const jost = Jost({ subsets: ['latin'] });

interface MyAppProps extends AppProps {
    Component: ComponentType<AppProps['Component']> & { authRequired?: boolean };
    pageProps: AppProps['pageProps'];
}

function MyApp({ Component, pageProps }: MyAppProps) {
    return (
        <AuthProvider>
            <div className={jost.className}>
                <ToastContainer />
                <Header />
                <Component {...pageProps} />
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default MyApp;
