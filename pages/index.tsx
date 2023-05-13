import ContainerComponent from "@/component/container";
import WelcomeComponent from "@/component/pages/welcome";
import { ConfigData } from "@/data/config.data";

const title = `${ConfigData.mainTitle}`;

export default function Home() {
  return (
    <>
      <ContainerComponent
        element={WelcomeComponent()}
        title={title}
      ></ContainerComponent>
    </>
  );
}
