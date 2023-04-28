import Error404Component from "@/component/404";
import ContainerComponent from "@/component/container";
import HeadComponent from "@/component/head";

const title = "404";

export default function Home404() {
  return (
    <>
      <HeadComponent title={title} />
      <ContainerComponent element={Error404Component()}></ContainerComponent>
    </>
  );
}
