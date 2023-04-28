import ContainerComponent from "@/component/container";
import SampleComponent from "@/component/pages/sample";
import HeadComponent from "@/component/head";

const title = "奶加";

export default function Home() {
  return (
    <>
      <HeadComponent title={title} />
      <ContainerComponent element={SampleComponent()}></ContainerComponent>
    </>
  );
}
