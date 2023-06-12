import ContainerComponent from "@/component/container";
import SampleComponent from "@/component/pages/sample";
import { CommissionTypeData } from "@/data/commission-type.data";
import { ConfigData } from "@/data/config.data";
import { GetStaticProps } from "next/types";
import React from "react";
import fs from "fs";

const title = `作品範例 | ${ConfigData.mainTitle}`;

export default function Home(props: { images: any }) {
  return (
    <>
      <ContainerComponent
        element={SampleComponent(props.images)}
        title={title}
      ></ContainerComponent>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  let images = {};
  CommissionTypeData.forEach((data) =>
    Object.assign(images, {
      [data.link]: fs
        .readdirSync(`public/${data.link}`)
        .filter((file) => file.startsWith(`${data.link}_sample_`))
        .map((file) => `${data.link}/${file}`),
    })
  );

  return { props: { images: images } };
};
