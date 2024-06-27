import '../app/globals.css';
import { Jost } from 'next/font/google';
import {Header} from "@/components/Header";
import Footer from "@/components/Footer";
import {ToastContainer} from "react-toastify";
import { AppProps } from 'next/app'
import { ComponentType } from 'react'
const jost = Jost({ subsets: ['latin'] });

interface MyAppProps {
    Component: ComponentType<AppProps['Component']>;
    pageProps: AppProps['pageProps'];
}

function MyApp({ Component, pageProps }: MyAppProps) {
    return (
        <div className={jost.className}>
            <ToastContainer />
            <Header />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}

export default MyApp;
