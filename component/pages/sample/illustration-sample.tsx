import { CommissionTypeModel } from "@/model/commission-type.model";

interface Prop {
  data: CommissionTypeModel;
}

export default function IllustrationLayoutComponent({ data }: Prop) {
  return (
    <>
      <div className="ts-wrap is-vertical">
        {data.images.samples.map((img: string, i: number) => (
          <div className="ts-image" key={i}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
