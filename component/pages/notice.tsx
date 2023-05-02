import { NoticeData } from "@/data/notice.data";

export default function NoticeComponent() {
  return (
    <>
      <div className="ts-wrap is-vertical">
        {NoticeData.map((data, i) => (
          <div key={i}>
            <div className="ts-header is-big text-danger">
              <span className="ts-icon is-end-spaced bi-chevron-right" />
              {data.title}
            </div>
            {data.content.map((desc, j) => (
              <div className="ts-content is-dense" key={j}>
                <div className="ts-row">
                  <div className="column">
                    <span className="ts-icon bi-dash-lg" />
                  </div>
                  <div className="column is-fluid text-secondary-emphasis">
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
