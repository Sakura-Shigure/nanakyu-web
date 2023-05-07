import ContainerComponent from "@/component/container";
import PricingComponent from "@/component/pages/pricing";
import HeadComponent from "@/component/main/head";

const title = "奶加";

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
