import { CommissionTypeModel } from "@/model/commission-type.model";

interface Prop {
  data: CommissionTypeModel;
}

export default function HeadshotSampleLayoutComponent({ data }: Prop) {
  return (
    <>
      <div>
        <div className="ts-grid is-relaxed tablet+:is-3-columns mobile:is-2-columns">
          {data.samples?.map((img: string, i: number) => (
            <div className="column" key={i}>
              <div className="ts-image is-rounded">
                <img src={img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
