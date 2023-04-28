import "tocas/dist/tocas.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
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
