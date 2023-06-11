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
        <meta property="og:title" content="奶加" />
        <meta
          property="og:description"
          content="主接角色設計、L2D立繪、直播模板"
        />
        <meta name="description" content="主接角色設計、L2D立繪、直播模板" />
        <meta property="og:image" content="/favicon.png" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tocas/4.2.3/tocas.min.js" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
