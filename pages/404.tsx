import Error404Component from "@/component/404";
import ContainerComponent from "@/component/container";
import { ConfigData } from "@/data/config.data";

const title = `404 | ${ConfigData.mainTitle}`;

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
