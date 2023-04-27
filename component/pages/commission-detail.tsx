import { CommissionTypeData } from "@/data/commission-type.data";
import { CommissionTypeModel } from "@/model/commission-type.model";
import Link from "next/link";
import { useRouter } from "next/router";

interface Prop {
  data: CommissionTypeModel;
}

export default function CommissionDetailComponent({ data }: Prop) {
  const currentSubRoute = useRouter().asPath.split("/")[2] ?? null;
  console.log(currentSubRoute);
  return (
    <>
      <div className="ts-grid">
        <div className="column is-4-wide">
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
        <div className="column is-12-wide">
          <div className="cell">
            <div className="ts-placeholder">
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
              <div className="text"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
