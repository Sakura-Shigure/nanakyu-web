import "tocas/dist/tocas.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Head from "next/head";
import Topbar from "@/component/topbar";

const title = "奶加";

export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Topbar />
    </>
  );
}
