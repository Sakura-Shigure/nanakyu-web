import { CommissionTypeModel } from "@/model/commission-type.model";

export const CommissionTypeData: CommissionTypeModel[] = [
  {
    name: "Vtuber Live2D 模型",
    link: "live2d",
    short_description: ["僅原畫拆分，不包含模型製作"],
    price: 18000,
    price_description: [
      "如需由繪師設計(純文字設定)加收NT$3000",
      "底價包含基礎表情(僅面部拆分)兩個，額外增加單個NT$500",
    ],
    steps: [
      {
        name: "草圖",
        description: [
          "應付總價 50%",
          "可提前說明需要多種服裝配色以供選擇",
          "確認配色以及設計等，接受兩次整體上的大改以及不限次數的顏色調整",
          "草圖通過後不接受設計上的修改",
        ],
      },
      {
        name: "線稿及填色",
        description: ["應付總價 80%", "僅接受顏色調整和小物件的位置移動"],
      },
      {
        name: "完稿",
        description: [
          "應付總價 100%",
          "僅接受由我方繪師繪製失誤導致的顏色錯誤修改",
        ],
      },
      {
        name: "拆分",
        description: ["完稿提交psd檔"],
      },
    ],
    notice: [
      "稿件開始前的一周內請付清總價的50%作為訂金，一周後仍未支付訂金將自動作廢",
      "任何階段的訂金，請一周內付清否則不會繼續進行委託",
      "任意階段，非我方繪師作畫失誤導致的退單/不想要了等等情況下請支付當前階段的稿費，在此之前的稿費皆不退還",
      "如草圖階段非我方繪師這邊的原因導致不想要了/退單，則不退訂金",
      "有問題請一併提出不要一問一答，不接受臨時提議修改大範圍內容",
    ],
  },
  {
    name: "插圖",
    link: "illustration",
    short_description: [
      "一些介紹(第一行).......",
      "一些介紹(第二行).......",
      "一些介紹(第三行).......",
      "一些介紹(第四行).......",
      "一些介紹(第五行).......",
    ],
    price: 500,
    price_description: [],
    steps: [],
    notice: [],
  },
  {
    name: "貼圖",
    link: "stickers",
    short_description: [
      "尺寸: 1000x1000 px",
      "可以在Twitch使用",
      "我想不到了 QQ",
    ],
    price: 500,
    price_description: [],
    steps: [],
    notice: [],
  },
  {
    name: "頭貼",
    link: "headshot",
    short_description: ["有模板"],
    price: 500,
    price_description: [],
    steps: [],
    notice: [],
  },
];
