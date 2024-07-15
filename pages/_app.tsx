import '../app/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Jost } from 'next/font/google';
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { AppProps } from 'next/app';
import { ComponentType } from 'react';
import { AuthProvider } from '@/context/authContext';
import { CartProvider } from '@/context/CartContext'
import { appWithTranslation } from 'next-i18next'

const jost = Jost({ subsets: ['latin'] });

interface MyAppProps extends AppProps {
    Component: ComponentType<AppProps['Component']> & { authRequired?: boolean };
    pageProps: AppProps['pageProps'];
}

function MyApp({ Component, pageProps }: MyAppProps) {
    return (
        <AuthProvider>
            <CartProvider>
                <div className={jost.className}>
                    <ToastContainer />
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </div>
            </CartProvider>
        </AuthProvider>
    );
}

export default appWithTranslation(MyApp);
