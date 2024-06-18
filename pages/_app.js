import '../app/globals.css';
import { Jost } from 'next/font/google';
import {Header} from "@/components/Header";
import Footer from "@/components/Footer";
const jost = Jost({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
    return (
        <div className={jost.className}>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}

export default MyApp;
