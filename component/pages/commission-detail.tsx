import { CommissionTypeData } from "@/data/commission-type.data";
import { CommissionTypeModel } from "@/model/commission-type.model";
import Link from "next/link";
import { useRouter } from "next/router";

interface Prop {
  data: CommissionTypeModel;
}

export default function CommissionDetailComponent({ data }: Prop) {
  const currentSubRoute = useRouter().asPath.split("/")[2] ?? null;
  return (
    <>
      <div className="ts-grid">
        <div className="column is-4-wide is-padding">
          <div className="ts-menu is-start-icon is-separated">
            {CommissionTypeData.map((commission) => (
              <>
                <Link
                  className={`item ${
                    commission.id === currentSubRoute ? "is-active" : ""
                  }`}
                  href={"/pricing/" + commission.id}
                  key={commission.id}
                >
                  <span className="ts-icon is-caret-right-icon"></span>{" "}
                  {commission.name}
                </Link>
              </>
            ))}
          </div>
        </div>
        <div className="column is-1-wide" />
        <div className="column is-11-wide">
          <div className="ts-grid">
            <div className="column is-9-wide">
              <div className="ts-header is-massive">{data.name}</div>
            </div>
            <div className="column is-1-wide">
              <div className="ts-text is-large is-sub">{"NT$ "}</div>
            </div>
            <div className="column is-6-wide">
              <div className="ts-header is-massive">{data.price}</div>
            </div>
          </div>
          <div className="ts-space"></div>
          <div className="ts-header is-big">
            <span className="ts-icon is-rounded is-end-spaced is-credit-card-icon" />
            {"詳細價格"}
          </div>
          <div className="ts-content">
            {data.price_description.map((desc) => (
              <>
                <div className="ts-content is-dense">
                  <div className="ts-row">
                    <div className="column">
                      <span className="ts-icon is-diamond-icon" />
                    </div>
                    <div className="column is-fluid">{desc}</div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="ts-space"></div>
          <div className="ts-header is-big">
            <span className="ts-icon is-rounded is-end-spaced is-arrow-right-icon" />
            {"委託步驟及付款流程"}
          </div>
          <div className="ts-content">
            <div className="ts-procedure is-vertical is-unordered">
              {data.steps.map((step) => (
                <>
                  <a className="item is-completed">
                    <div className="content">
                      <div className="indicator"></div>
                      <div className="label">
                        <span className="ts-header is-large">{step.name}</span>
                      </div>
                    </div>
                    <div className="ts-space"></div>
                    <div className="ts-segment">
                      <div className="ts-list is-unordered">
                        {step.description.map((desc) => (
                          <>
                            <div className="item">{desc}</div>
                          </>
                        ))}
                      </div>
                    </div>
                  </a>
                </>
              ))}
            </div>
          </div>
          <div className="ts-space"></div>
          <div className="ts-header is-big">
            <span className="ts-icon is-rounded is-end-spaced is-triangle-exclamation-icon" />
            {"注意事項"}
          </div>
          <div className="ts-content">
            {data.notice.map((desc) => (
              <>
                <div className="ts-content is-dense">
                  <div className="ts-row">
                    <div className="column">
                      <span className="ts-icon is-diamond-icon" />
                    </div>
                    <div className="column is-fluid">{desc}</div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
