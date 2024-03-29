/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Html, Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
   static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps };
   }

   render() {
      return (
         <Html>
            <Head>
               <link rel="preconnect" href="https://fonts.gstatic.com" />
               <link
                  href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap"
                  rel="stylesheet"
               />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default AppDocument;
