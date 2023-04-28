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
