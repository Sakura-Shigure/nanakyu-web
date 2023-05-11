import { CommissionTypeModel } from "@/model/commission-type.model";

interface Prop {
  data: CommissionTypeModel;
}

export default function Live2DLayoutComponent({ data }: Prop) {
  const images = data.images.samples.map((img: string, i: number) => img);
  return (
    <>
      <div className="ts-image">
        <img src={images[0]} alt="" />
      </div>
      <div className="ts-image">
        <img src={images[1]} alt="" />
      </div>
    </>
  );
}
