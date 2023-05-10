import { CommissionTypeModel } from "@/model/commission-type.model";

interface Prop {
  data: CommissionTypeModel;
}

export default function HeadshotSampleLayoutComponent({ data }: Prop) {
  return (
    <>
      <div>
        <div className="ts-grid is-compact tablet+:is-3-columns mobile:is-2-columns">
          {data.images.samples.map((img: string, i: number) => (
            <div className="column" key={i}>
              <img className=" ts-image is-rounded is-small" src={img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
