import { ConfigData } from "@/data/config.data";

export default function NoticeBarComponent() {
  return (
    <>
      {ConfigData.logo.image && (
        <>
          <div className="ts-notice is-dense">
            <div className="title">注意</div>
            <div className="content">{ConfigData.pageNotice}</div>
          </div>
          <div className="ts-space" />
        </>
      )}
    </>
  );
}
