import ContainerComponent from "@/component/container";
import NoticeComponent from "@/component/pages/notice";

const title = "注意事項 | 奶加委託";

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
