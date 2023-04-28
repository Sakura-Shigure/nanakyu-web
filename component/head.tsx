import Head from "next/head";

interface Prop {
  title: string;
}

export default function HeadComponent({ title }: Prop) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/tocas/4.2.3/tocas.min.js"
          async
        />
        <meta property="og:title" content={title} key="title" />
      </Head>
    </>
  );
}
