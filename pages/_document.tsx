import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css?v=7857324" />
                    <meta name="description" content="Umino online shop for cloth" />
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
