import ContainerComponent from "@/component/container";
import WelcomeComponent from "@/component/pages/welcome";

const title = "奶加";

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
