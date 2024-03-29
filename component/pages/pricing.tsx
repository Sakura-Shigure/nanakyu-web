import { CommissionTypeData } from "@/data/commission-type.data";
import Link from "next/link";
import MaintainanceComponent from "../maintainance";

export default function PricingComponent() {
  if (CommissionTypeData.length === 0) {
    return <MaintainanceComponent />;
  }

  let thumbnail = (id: string) => `/cmsn/${id}_thumbnail.webp`;

  return (
    <>
      <div className="ts-wrap is-vertical">
        {CommissionTypeData.map((data, i) => (
          <Link
            className="ts-box tablet+:is-horizontal"
            href={`/pricing/${data.link}`}
            key={i}
          >
            <div className="ts-image tablet+:is-medium is-4-by-3 is-covered">
              <img className="pricing" src={thumbnail(data.link)} alt="" />
            </div>
            <div className="ts-content">
              <div className="ts-header is-big">
                {data.name}
                {data.is_stop && (
                  <span className="ts-badge is-negative is-outlined is-start-spaced">
                    暫停委託
                  </span>
                )}
              </div>
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
