import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="is-light">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tocas/4.2.3/tocas.min.css"
        />
      </Head>
      <body>
        <NextScript />
        <Main />
      </body>
    </Html>
  );
}
