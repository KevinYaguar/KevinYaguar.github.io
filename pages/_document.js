import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <title>My portfolio</title>
            <meta name="description" content="Kevin Yaguar portfolio"></meta>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css' />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}