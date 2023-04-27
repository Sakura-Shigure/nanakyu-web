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
              className="ts-box is-horizontal"
              href={`/pricing/${data.id}`}
              key={data.id}
            >
              <div className="ts-image is-large is-covered">
                <Image src="/image.png" alt={""} width={500} height={300} />
              </div>
              <div className="ts-content">
                <div className="ts-header is-big">{data.name}</div>
                {data.short_description.map((desc) => (
                  <>
                    <p className="ts-text is-medium">{desc}</p>
                  </>
                ))}
              </div>
              <div className="ts-content position-absolute bottom-0 end-0">
                <span className="ts-text is-big is-padded">NT$ </span>
                <span className="ts-text is-massive is-padded">
                  {data.price}
                </span>
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
}
