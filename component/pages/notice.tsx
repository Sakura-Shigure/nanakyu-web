import { NoticeData } from "@/data/notice.data";

export default function NoticeComponent() {
  return (
    <>
      {NoticeData.map((data) => (
        <>
          <div className="ts-header is-big text-danger">
            <span className="ts-icon is-end-spaced is-angle-right-icon" />
            {data.title}
          </div>
          <div className="ts-content">
            {data.content.map((desc) => (
              <>
                <div className="ts-content is-dense">
                  <div className="ts-row">
                    <div className="column">
                      <span className="ts-icon is-minus-icon" />
                    </div>
                    <div className="column is-fluid">{desc}</div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      ))}
    </>
  );
}
