import ContainerComponent from "@/component/container";
import HeadComponent from "@/component/head";
import SampleComponent from "@/component/pages/sample";
import React from "react";

const title = "奶加";

export default function Home() {
  return (
    <>
      <HeadComponent title={title} />
      <ContainerComponent element={SampleComponent()}></ContainerComponent>
    </>
  );
}
