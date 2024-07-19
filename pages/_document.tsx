import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
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
