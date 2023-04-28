import WelcomeComponent from "@/component/pages/welcome";
import ContainerComponent from "@/component/container";
import HeadComponent from "@/component/head";

const title = "奶加";

export default function Home() {
  return (
    <>
      <HeadComponent title={title} />
      <ContainerComponent element={WelcomeComponent()}></ContainerComponent>
    </>
  );
}
