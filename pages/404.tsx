import Error404Component from "@/component/404";
import ContainerComponent from "@/component/container";
import Head from "next/head";

const title = "404";

export default function Home404() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <ContainerComponent element={Error404Component()}></ContainerComponent>
    </>
  );
}
