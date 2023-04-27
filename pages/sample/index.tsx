import "tocas/dist/tocas.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Head from "next/head";
import ContainerComponent from "@/component/container";
import SampleComponent from "@/component/pages/sample";

const title = "奶加";

export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <ContainerComponent element={SampleComponent()}></ContainerComponent>
    </>
  );
}
