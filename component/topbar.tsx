export default function Topbar() {
  return (
    <>
      <div className="ts-row">
        <div className="column">
          <div className="ts-tab is-large is-start-aligned">
            <a className="item">奶加</a>
          </div>
        </div>
        <div className="column is-fluid">
          <div className="ts-tab is-large is-center-aligned">
            <a className="item is-active">首頁</a>
            <a className="item">價目表</a>
            <a className="item">注意事項</a>
            <a className="item">作品範例</a>
          </div>
        </div>
        <div className="column">
          <div className="ts-tab is-large is-end-aligned">
            <a className="item" href="https://www.twitch.tv/nanakyuu301">
              <i className="bi bi-twitch"></i>
            </a>
            <a className="item" href="https://twitter.com/hellojoyin">
              <i className="bi bi-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
