import ContainerComponent from "@/component/container";
import NoticeComponent from "@/component/pages/notice";
import HeadComponent from "@/component/main/head";

const title = "奶加";

export default function Home() {
  return (
    <>
      <ContainerComponent
        element={NoticeComponent()}
        title={title}
      ></ContainerComponent>
    </>
  );
}
