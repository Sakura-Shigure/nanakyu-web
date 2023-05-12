import ContainerComponent from "@/component/container";
import PricingComponent from "@/component/pages/pricing";
import { ConfigData } from "@/data/config.data";

const title = `價目表 | ${ConfigData.mainTitle}`;

export default function Home() {
  return (
    <>
      <ContainerComponent
        element={PricingComponent()}
        title={title}
      ></ContainerComponent>
    </>
  );
}
