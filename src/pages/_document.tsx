import Document, { Head, Html, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-br">
                <Head>

                    <link rel="shortcut icon" href="favicon.png" type="image/png" />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
                        rel="stylesheet" />
                    <script src="https://kit.fontawesome.com/6a7232e98e.js" crossOrigin="anonymous"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

/*
    TUdo neste arquivo é calculado apenas uma vez
    enquanto _app.tsx recalcula os dados gerais aplicados a
    cada página para toda nova requisição
*/