// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google site verification meta tag */}
          <meta name="google-site-verification" content="IPL0B40qZB1CXwzNooV_4gd-VuPkKq2UW2Oh9abwVwQ" />
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
