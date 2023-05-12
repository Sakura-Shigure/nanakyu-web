/* eslint-disable react-hooks/rules-of-hooks */
import { CommissionTypeData } from "@/data/commission-type.data";
import { useState } from "react";
import MaintainanceComponent from "../maintainance";
import { CommissionTypeModel } from "@/model/commission-type.model";
import HeadComponent from "../main/head";
import { ConfigData } from "@/data/config.data";

export default function SampleComponent() {
  if (CommissionTypeData.length === 0) {
    return <MaintainanceComponent />;
  }
  const [commissionType, setCommissionType] = useState(
    CommissionTypeData[0].link
  );
  let currentType = CommissionTypeData.find(
    (data) => data.link === commissionType
  );
  const commissionClick = (data: CommissionTypeModel) => {
    setCommissionType(data.link);
    currentType = data;
  };
  return (
    <>
      <div>
        <HeadComponent
          title={`《${currentType?.name}》作品範例 | ${ConfigData.mainTitle}`}
        />
        <div className="ts-segment is-secondary mobile:u-hidden">
          <div className="ts-breadcrumb is-stepped is-large">
            {CommissionTypeData.map((data, i) => (
              <div
                className={`item ${
                  data.link === commissionType && "is-active fw-bold"
                }`}
                onClick={() => commissionClick(data)}
                key={i}
              >
                {data.name}
              </div>
            ))}
          </div>
        </div>
        <div className="ts-segment is-secondary tablet+:u-hidden">
          <div className="ts-row">
            <div className="column is-fluid ts-header is-heavy">
              {currentType?.name}
            </div>
            <button
              className="column tablet+:u-hidden"
              data-dropdown="commissionSample"
            >
              <i className="ts-icon bi-list" />
            </button>
          </div>
          <div
            className="ts-dropdown is-bottom"
            data-name="commissionSample"
            data-position="bottom-end"
            style={{ maxWidth: "500px" }}
          >
            {CommissionTypeData.map((data, i) => (
              <div
                className="item"
                onClick={() => commissionClick(data)}
                key={i}
              >
                <span className="ts-text is-large">{data.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="ts-space tablet+:u-hidden"></div>
        {currentType && (
          <>
            <div
              className="ts-content ts-header is-massive mobile:u-hidden"
              style={{ color: "var(--ts-primary-900)" }}
            >
              {currentType?.name}
            </div>
          </>
        )}
        {(currentType &&
          currentType.layout &&
          currentType.layout(currentType)) || <MaintainanceComponent />}
      </div>
    </>
  );
}
