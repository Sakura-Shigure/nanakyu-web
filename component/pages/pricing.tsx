import { CommissionTypeData } from "@/data/commission-type.data";
import Image from "next/image";
import Link from "next/link";

export default function PricingComponent() {
  return (
    <>
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
              <div className="ts-text is-massive is-padded">
                NT$ {data.price}
              </div>
            </div>
          </Link>
          {i + 1 !== row.length ? <div className="ts-space" /> : <></>}
        </>
      ))}
    </>
  );
}
