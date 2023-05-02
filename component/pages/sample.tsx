/* eslint-disable react-hooks/rules-of-hooks */
import { CommissionTypeData } from "@/data/commission-type.data";
import { useState } from "react";
import MaintainanceComponent from "../maintainance";
import { CommissionTypeModel } from "@/model/commission-type.model";

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
      <div className="ts-segment is-secondary">
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
      {(currentType && currentType.layout) || <MaintainanceComponent />}
    </>
  );
}

function commissionClick() {}
