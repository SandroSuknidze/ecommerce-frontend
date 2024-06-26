import '../app/globals.css';
import { Jost } from 'next/font/google';
import {Header} from "@/components/Header";
import Footer from "@/components/Footer";
import {ToastContainer} from "react-toastify";
const jost = Jost({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
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
