import { CommissionTypeData } from "@/data/commission-type.data";
import Image from "next/image";
import Link from "next/link";

export default function PricingComponent() {
  return (
    <>
      <div className="ts-wrap is-vertical">
        {CommissionTypeData.map((data, i, row) => (
          <>
            <Link
              className="ts-box tablet+:is-horizontal"
              href={`/pricing/${data.id}`}
              key={data.id}
            >
              <div className="ts-image tablet+:is-large is-covered">
                <Image src="/image.png" alt={""} width={500} height={300} />
              </div>
              <div className="ts-content">
                <div className="ts-header is-big fw-bold">{data.name}</div>
                {data.short_description.map((desc) => (
                  <>
                    <p className="ts-text is-medium text-secondary">{desc}</p>
                  </>
                ))}
              </div>
              <div className="ts-content position-absolute bottom-0 end-0 mobile:u-hidden">
                <div className="ts-statistic">
                  <div className="unit">NT$ </div>
                  <div className="value">{data.price.toLocaleString()}</div>
                </div>
              </div>
              <div className="ts-content tablet+:u-hidden">
                <div className="ts-statistic">
                  <div className="unit">NT$ </div>
                  <div className="value">{data.price.toLocaleString()}</div>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
}
