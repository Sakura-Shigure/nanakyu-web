import Error404Component from "@/component/404";
import ContainerComponent from "@/component/container";
import HeadComponent from "@/component/main/head";

const title = "404";

export default function Home404() {
  return (
    <>
      <ContainerComponent
        element={Error404Component()}
        title={title}
      ></ContainerComponent>
    </>
  );
}
