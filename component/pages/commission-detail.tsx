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
        <div className="column is-4-wide tablet-:u-hidden">
          <div className="ts-space is-small" />

          <div className="ts-menu is-start-icon is-separated is-accent">
            {CommissionTypeData.map((typeData, i) => (
              <Link
                className={`item ${
                  typeData.link === currentSubRoute && "is-active"
                }`}
                href={"/pricing/" + typeData.link}
                key={i}
              >
                <i className="ts-icon bi-caret-right-fill" /> {typeData.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="column tablet-:is-hidden desktop+:is-1-wide" />
        <div className="column is-top-aligned tablet-:is-16-wide desktop+:is-11-wide">
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
            <div className="ts-row is-middle-aligned">
              <div className="column is-fluid ts-header is-huge">
                {data.name}
              </div>
              <div
                className="column ts-button is-icon is-outlined "
                data-dropdown="commissionDetail"
              >
                <i className="ts-icon bi-list" />
              </div>
              <div
                className="ts-dropdown is-bottom"
                data-name="commissionDetail"
                data-position="bottom-end"
                style={{ maxWidth: "500px" }}
              >
                {CommissionTypeData.map((typeData, i) => (
                  <Link
                    className="item"
                    href={"/pricing/" + typeData.link}
                    key={i}
                  >
                    <span className="ts-text is-big">{typeData.name}</span>
                  </Link>
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
            <i className="ts-icon is-rounded is-end-spaced bi-credit-card" />
            {"詳細價格"}
          </div>
          <div className="ts-content">
            {data.price_description.map((desc, i) => (
              <div className="ts-content is-dense" key={i}>
                <div className="ts-row">
                  <div className="column">
                    <i className="ts-icon is-secondary bi-diamond-fill" />
                  </div>
                  <div className="column is-fluid">{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="ts-space"></div>
          <div
            className="ts-header is-big"
            style={{ color: "var(--ts-warning-800)" }}
          >
            <span className="ts-icon is-rounded is-end-spaced is-big bi-arrow-right" />
            {"委託步驟及付款流程"}
          </div>
          <div className="ts-content">
            <div className="ts-procedure is-vertical is-unordered">
              {data.steps.map((step, i) => (
                <a className="item is-completed" key={i}>
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
                  <div className="ts-segment text-secondary-emphasis">
                    <div className="ts-list is-unordered">
                      {step.description.map((desc, j) => (
                        <div className="item" key={j}>
                          {desc}
                        </div>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="ts-space"></div>
          <div
            className="ts-header is-big"
            style={{ color: "var(--ts-negative-800)" }}
          >
            <span className="ts-icon is-rounded is-end-spaced bi-exclamation-triangle-fill" />
            {"注意事項"}
          </div>
          <div className="ts-content">
            {data.notice.map((desc, i) => (
              <div className="ts-content is-dense" key={i}>
                <div className="ts-row">
                  <div className="column">
                    <span className="ts-icon is-secondary bi-diamond-fill" />
                  </div>
                  <div className="column is-fluid">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
