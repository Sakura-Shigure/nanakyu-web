import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="is-light">
      <Head />
      <body>
        <div className="ts-content is-fitted">
          <div className="ts-container is-narrow">
            {/* <Title /> */}
            <Main />
            <NextScript />
          </div>
        </div>
        <div className="ts-divider"></div>
      </body>
      {/* <Footer /> */}
    </Html>
  );
}
