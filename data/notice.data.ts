import { NoticeModel } from "@/model/notice.model";

export const NoticeData: NoticeModel[] = [
  {
    title: "注意事項",
    content: [
      "不接受未成年人委託",
      "可接受完稿後由我方繪師帶水印並以小尺寸作為範例的形式公開宣傳，若不能接受繪師完成作品後公開以及收錄至作品範例，價格將為總價的2倍",
      "報價均為底價，會根據需求以及角色複雜程度而有所變動",
      "價目表之價格均為非商用價格，商用價可與繪師溝通討論，若為商用價會特別標註",
      "成品交付除Live2D外均為透明背景的PNG檔，需要PSD檔（不包含圖層）請提前向繪師詢問可否提供",
    ],
  },
  {
    title: "委託須知",
    content: [
      "有意委託可直接私訊繪師",
      "委託內容中請附帶詳細委託需求以及付款方式等，確認接搞後會給大致檔期、總金額以及訂金支付的時間",
      "請附上較為清晰且能夠看清大致結構的顏色和人設例圖，不建議提供的人設，如：因場景或光影看不清原本固有色、尺寸過小、人物側面",
    ],
  },
  {
    title: "付款方式",
    content: ["銀行轉帳", "郵局無摺", "超商代碼(需加收手續費)"],
  },
  {
    title: "聯絡方式",
    content: ["Twitter, Discord 可直接私訊"],
  },
];
