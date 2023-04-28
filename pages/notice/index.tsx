import "tocas/dist/tocas.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Head from "next/head";
import TopbarComponent from "@/component/topbar";
import ContainerComponent from "@/component/container";
import NoticeComponent from "@/component/pages/notice";
import HeadComponent from "@/component/head";

const title = "奶加";

export default function Home() {
  return (
    <>
      <HeadComponent title={title} />
      <ContainerComponent element={NoticeComponent()}></ContainerComponent>
    </>
  );
}
