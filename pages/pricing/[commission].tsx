import ContainerComponent from "@/component/container";
import CommissionDetailComponent from "@/component/pages/commission-detail";
import { CommissionTypeData } from "@/data/commission-type.data";
import Head from "next/head";
import { useRouter } from "next/router";

export default function CommissionDetail() {
  const router = useRouter();
  const id = router.query.commission;
  const commission = CommissionTypeData.find((data) => data.id === id);
  const title = `價目表 | ${
    CommissionTypeData.find((data) => data.id === id)?.name
  }`;
  if (!id || !commission) return <></>;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <ContainerComponent
        element={CommissionDetailComponent({ data: commission })}
      ></ContainerComponent>
    </>
  );
}
