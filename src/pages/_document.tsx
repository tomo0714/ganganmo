import Document, { Head, Html, Main, NextScript } from 'next/document'

// class Document extends NextDocument {
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {process.env.NEXT_PUBLIC_ENV_NAME !== 'PRD' && <meta name="robots" content="noindex" />}
          <link href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400&display=swap" rel="stylesheet" />
          <title>Yuri Iwamoto ONLINE STORE</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument
