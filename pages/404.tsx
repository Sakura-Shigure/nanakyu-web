import Error404Component from "@/component/404";
import ContainerComponent from "@/component/container";

const title = "404 | 奶加";

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
