import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tocas/4.2.3/tocas.min.js" />
        <meta name="description" content="主接角色設計、L2D立繪、直播模板" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://nanakyuu.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="奶加" />
        <meta
          property="og:description"
          content="主接角色設計、L2D立繪、直播模板"
        />
        <meta property="og:image" content="/favicon.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="nanakyuu.com" />
        <meta property="twitter:url" content="https://nanakyuu.com/" />
        <meta name="twitter:title" content="奶加" />
        <meta
          name="twitter:description"
          content="主接角色設計、L2D立繪、直播模板"
        />
        <meta name="twitter:site" content="@SakuraShigure99" />
        <meta name="twitter:creator" content="@hellojoyin" />
        <meta name="twitter:image" content="https://nanakyuu.com/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
