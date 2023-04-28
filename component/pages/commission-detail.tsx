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
        <div className="column is-4-wide is-padding tablet-:u-hidden">
          <div className="ts-menu is-start-icon is-separated is-accent">
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
        <div className="column tablet-:is-16-wide desktop+:is-11-wide">
          <div className="ts-grid tablet-:u-hidden">
            <div className="column is-9-wide">
              <div className="ts-header is-massive">{data.name}</div>
            </div>
            <div className="column is-6-wide">
              <div className="ts-statistic">
                <div className="unit">NT$ </div>
                <div className="value">{data.price.toLocaleString()}</div>
              </div>
            </div>
          </div>
          <div className="desktop+:u-hidden">
            <div className="ts-row">
              <div className="column is-fluid ts-header is-huge">
                {data.name}
              </div>
              <div
                className="column ts-button is-icon is-outlined"
                data-dropdown="commissions"
              >
                <span className="ts-icon is-ellipsis-icon"></span>
              </div>
              <div
                className="ts-dropdown is-bottom"
                data-name="commissions"
                data-position="bottom-end"
                style={{ maxWidth: "500px" }}
              >
                {CommissionTypeData.map((commission) => (
                  <>
                    <Link
                      className="item"
                      href={"/pricing/" + commission.id}
                      key={commission.id}
                    >
                      <span className="ts-text is-big">{commission.name}</span>
                    </Link>
                  </>
                ))}
              </div>
            </div>
            <div className="ts-statistic">
              <div className="unit">NT$ </div>
              <div className="value">{data.price.toLocaleString()}</div>
            </div>
          </div>
          <div className="ts-space"></div>
          <div
            className="ts-header is-big"
            style={{ color: "var(--ts-primary-800)" }}
          >
            <span className="ts-icon is-rounded is-end-spaced is-credit-card-icon" />
            {"詳細價格"}
          </div>
          <div className="ts-content">
            {data.price_description.map((desc) => (
              <>
                <div className="ts-content is-dense">
                  <div className="ts-row">
                    <div className="column">
                      <span className="ts-icon is-diamond-icon is-secondary" />
                    </div>
                    <div className="column is-fluid">{desc}</div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="ts-space"></div>
          <div
            className="ts-header is-big"
            style={{ color: "var(--ts-warning-800)" }}
          >
            <span className="ts-icon is-rounded is-end-spaced is-arrow-right-icon" />
            {"委託步驟及付款流程"}
          </div>
          <div className="ts-content">
            <div className="ts-procedure is-vertical is-unordered">
              {data.steps.map((step) => (
                <>
                  <a className="item is-completed">
                    <div className="content">
                      <div
                        className="indicator"
                        style={{ color: "var(--ts-positive-800)" }}
                      ></div>
                      <div
                        className="label"
                        style={{ color: "var(--ts-positive-800)" }}
                      >
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
          <div
            className="ts-header is-big"
            style={{ color: "var(--ts-negative-800)" }}
          >
            <span className="ts-icon is-rounded is-end-spaced is-triangle-exclamation-icon" />
            {"注意事項"}
          </div>
          <div className="ts-content">
            {data.notice.map((desc) => (
              <>
                <div className="ts-content is-dense">
                  <div className="ts-row">
                    <div className="column">
                      <span className="ts-icon is-diamond-icon is-secondary" />
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
