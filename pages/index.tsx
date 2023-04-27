import "tocas/dist/tocas.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Head from "next/head";
import Welcome from "@/component/pages/welcome";
import Container from "@/component/container";

const title = "奶加";

export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Container element={Welcome()}></Container>
    </>
  );
}
