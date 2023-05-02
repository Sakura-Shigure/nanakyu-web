import { CommissionTypeData } from "@/data/commission-type.data";
import Image from "next/image";
import Link from "next/link";

export default function PricingComponent() {
  return (
    <>
      <div className="ts-wrap is-vertical">
        {CommissionTypeData.map((data, i) => (
          <Link
            className="ts-box tablet+:is-horizontal"
            href={`/pricing/${data.link}`}
            key={i}
          >
            <div className="ts-image tablet+:is-large is-covered is-4-by-3">
              <img src={data.images.thumbnail} alt="" />
            </div>
            <div className="ts-content">
              <div className="ts-header is-big">{data.name}</div>
              {data.short_description.map((desc, j) => (
                <p className="ts-text is-medium text-secondary" key={j}>
                  {desc}
                </p>
              ))}
            </div>
            <div className="ts-content tablet+:position-absolute tablet+:bottom-0 tablet+:end-0">
              <div className="ts-statistic">
                <div className="unit">NT$ </div>
                <div className="value">{data.price.toLocaleString()}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
