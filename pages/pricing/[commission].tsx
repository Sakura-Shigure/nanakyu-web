import ContainerComponent from "@/component/container";
import CommissionDetailComponent from "@/component/pages/commission-detail";
import { CommissionTypeData } from "@/data/commission-type.data";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

export default function CommissionDetail() {
  const router = useRouter();
  const id = router.query.commission;
  const commission = CommissionTypeData.find((data) => data.link === id);
  const title = `《${
    CommissionTypeData.find((data) => data.link === id)?.name
  }》價目表 | 奶加`;
  if (!id || !commission) return <></>;
  return (
    <>
      <ContainerComponent
        element={CommissionDetailComponent({ data: commission })}
        title={title}
      ></ContainerComponent>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = CommissionTypeData.map((data) => ({
    params: { commission: data.link },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};
