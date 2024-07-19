import Document, { Html, Head, Main, NextScript } from 'next/document';
// @ts-ignore
import i18nextConfig from '../next-i18next.config';

class MyDocument extends Document {
    render() {
        const currentLocale =
            this.props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;
        return (
            <Html lang={currentLocale}>
                <Head>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css?v=7857324" />
                    <title>Umino</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
