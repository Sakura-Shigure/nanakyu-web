import StickerSampleLayoutComponent from "@/component/pages/sample/sticker-sample";
import { CommissionTypeModel } from "@/model/commission-type.model";

export const CommissionTypeData: CommissionTypeModel[] = [
  {
    name: "貼圖",
    link: "stickers",
    short_description: [
      "一些介紹(第一行).......",
      "一些介紹(第二行).......",
      "一些介紹(第三行).......",
      "一些介紹(第四行).......",
    ],
    price: 300,
    price_description: ["待新增"],
    steps: [
      {
        name: "第一步",
        description: ["一些說明"],
      },
      {
        name: "第二步",
        description: ["一些說明"],
      },
    ],
    notice: ["待新增"],
    layout: StickerSampleLayoutComponent(),
    images: {
      thumbnail: "/sticker/sticker_thumbnail.png",
      samples: "",
    },
  },
  {
    name: "頭像",
    link: "headshot",
    short_description: ["一些介紹(第一行).......", "一些介紹(第二行)......."],
    price: 500,
    price_description: ["待新增"],
    steps: [
      {
        name: "第一步",
        description: ["一些說明"],
      },
      {
        name: "第二步",
        description: ["一些說明"],
      },
    ],
    notice: ["待新增"],
    images: {
      thumbnail: "/headshot/headshot_thumbnail.png",
      samples: "",
    },
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
    price: 3000,
    price_description: ["待新增"],
    steps: [
      {
        name: "第一步",
        description: ["一些說明"],
      },
      {
        name: "第二步",
        description: ["一些說明"],
      },
    ],
    notice: ["待新增"],
    images: {
      thumbnail: "/illustration/illustration_thumbnail.png",
      samples: "",
    },
    is_stop: true,
  },
  {
    name: "人物設計",
    link: "character_design",
    short_description: [
      "一些介紹(第一行).......",
      "一些介紹(第二行).......",
      "一些介紹(第三行).......",
      "一些介紹(第四行).......",
      "一些介紹(第五行).......",
    ],
    price: 2000,
    price_description: ["待新增"],
    steps: [
      {
        name: "第一步",
        description: ["一些說明"],
      },
      {
        name: "第二步",
        description: ["一些說明"],
      },
    ],
    notice: ["待新增"],
    images: {
      thumbnail: "/image.png",
      samples: "",
    },
  },
  {
    name: "Vtuber Live2D 模型",
    link: "live2d",
    short_description: ["(頁面 Demo 完成版)"],
    price: 18000,
    price_description: [
      "如需由繪師設計(純文字設定) - 加收NT$3000",
      "底價包含基礎表情(僅面部拆分)兩個 - 額外單個NT$500",
      "髮型增加 - 加收NT$3000up",
      "新衣裝 - 加收NT$5000up",
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
    images: {
      thumbnail: "/image.png",
      samples: "",
    },
    is_stop: true,
  },
];
