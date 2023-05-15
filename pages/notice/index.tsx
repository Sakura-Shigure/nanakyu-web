import ContainerComponent from "@/component/container";
import NoticeComponent from "@/component/pages/notice";
import { ConfigData } from "@/data/config.data";

const title = `注意事項 | ${ConfigData.mainTitle}`;

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
