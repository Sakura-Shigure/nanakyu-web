import ContainerComponent from "@/component/container";
import SampleComponent from "@/component/pages/sample";
import { ConfigData } from "@/data/config.data";
import React from "react";

const title = `作品範例 | ${ConfigData.mainTitle}`;

export default function Home() {
  return (
    <>
      <ContainerComponent
        element={SampleComponent()}
        title={title}
      ></ContainerComponent>
    </>
  );
}
