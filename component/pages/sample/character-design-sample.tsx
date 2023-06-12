import { CommissionTypeModel } from "@/model/commission-type.model";

interface Prop {
  data: CommissionTypeModel;
}

export default function CharacterDesignLayoutComponent({ data }: Prop) {
  const images = data.samples?.map((img: string, i: number) => img) as string[];
  return (
    <>
      <div className="ts-grid is-2-columns">
        <div className="column ts-image">
          <img src={images[0]} alt="" />
        </div>
        <div className="column ts-image">
          <img src={images[1]} alt="" />
        </div>
        <div className="column ts-image">
          <img src={images[2]} alt="" />
        </div>
        <div className="column ts-image">
          <img src={images[3]} alt="" />
        </div>
      </div>
      <div className="ts-image">
        <img src={images[4]} alt="" />
      </div>
    </>
  );
}
