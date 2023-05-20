import { CommissionTypeModel } from "@/model/commission-type.model";

interface Prop {
  data: CommissionTypeModel;
}

export default function StickerSampleLayoutComponent({ data }: Prop) {
  return (
    <>
      <div className="ts-content ts-header is-large">貼圖模板</div>
      <div className="ts-grid is-compact tablet+:is-5-columns mobile:is-3-columns">
        {data.images.samples.template.map((img: string, i: number) => (
          <div className="column ts-segment is-dense ts-image" key={i}>
            <img src={img} alt="" />
            <div className="ts-content is-center-aligned is-fitted">
              <div className="ts-badge is-small is-outlined">{i + 1}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
