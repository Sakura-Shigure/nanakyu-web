import MaintainanceComponent from "@/component/maintainance";

export default function StickerSampleLayoutComponent() {
  return (
    <>
      <div className="ts-content is-vertically-very-padded is-rounded">
        <div className="ts-center">
          <div className="ts-header is-secondary">COMING SOON</div>
          <div className="ts-text is-secondary">貼圖頁面正在準備中</div>
        </div>
      </div>
      <div className="ts-space"></div>
      <div className="ts-placeholder">
        <div className="image is-header"></div>
        <div className="text"></div>
        <div className="text"></div>
        <div className="text"></div>
        <div className="text"></div>
        <div className="text"></div>
        <div className="text is-header"></div>
        <div className="text"></div>
        <div className="text"></div>
        <div className="text"></div>
      </div>
    </>
  );
}
