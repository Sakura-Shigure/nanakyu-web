import ContainerComponent from "@/component/container";
import PricingComponent from "@/component/pages/pricing";
import HeadComponent from "@/component/head";

const title = "奶加";

export default function Home() {
  return (
    <>
      <HeadComponent title={title} />
      <ContainerComponent element={PricingComponent()}></ContainerComponent>
    </>
  );
}
