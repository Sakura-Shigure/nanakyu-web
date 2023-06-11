/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";

interface Prop {
  title: string;
}

export default function HeadComponent({ title }: Prop) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content="奶加" />
        <meta
          property="og:description"
          content="主接角色設計、L2D立繪、直播模板"
        />
        <meta name="description" content="主接角色設計、L2D立繪、直播模板" />
        <meta property="og:image" content="/favicon.png" />
      </Head>
    </>
  );
}
