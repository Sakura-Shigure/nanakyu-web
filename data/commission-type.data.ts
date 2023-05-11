import CharacterDesignLayoutComponent from "@/component/pages/sample/character-design-sample";
import HeadshotSampleLayoutComponent from "@/component/pages/sample/headshot-sample";
import IllustrationLayoutComponent from "@/component/pages/sample/illustration-sample";
import Live2DLayoutComponent from "@/component/pages/sample/live2d-sample";
import StickerSampleLayoutComponent from "@/component/pages/sample/sticker-sample";
import { CommissionTypeModel } from "@/model/commission-type.model";
import _ from "lodash";

export const CommissionTypeData: CommissionTypeModel[] = [
  {
    name: "貼圖",
    link: "stickers",
    short_description: [
      "請提出想要的動作、數量以及人物設定",
      "如角色設定複雜，會依情況額外加價",
      "可附上頻道網址或其他個人社交平台網址",
    ],
    price: 300,
    price_description: [
      "Twitch靜態表情圖(模板) - NT$300",
      "Twitch靜態表情圖(另外設計) - NT$400",
      "Twitch動態表情圖 - NT$600起",
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
        description: ["僅接受顏色調整和小物件的位置移動"],
      },
      {
        name: "完稿",
        description: [
          "應付總價 100%",
          "僅接受由我方繪師繪製失誤導致的顏色錯誤修改",
        ],
      },
      {
        name: "交件",
        description: ["結清後提交PNG檔"],
      },
    ],
    notice: [
      "稿件開始前的一周內請付清總價的50%作為訂金，一周後仍未支付訂金將自動作廢",
      "任何階段的訂金，請一周內付清否則不會繼續進行委託",
      "任意階段，非我方繪師作畫失誤導致的退單/不想要了等等情況下請支付當前階段的稿費，在此之前的稿費皆不退",
      "如草圖階段非我方繪師這邊的原因導致不想要了/退單，則不退訂金",
      "有問題請一併提出不要一問一答，不接受臨時提議修改大範圍內容",
    ],
    layout: (data: CommissionTypeModel) =>
      StickerSampleLayoutComponent({ data }),
    images: {
      thumbnail: "/sticker/sticker_thumbnail.png",
      samples: {
        template: _.range(16).map(
          (i: number) =>
            `/sticker/sticker_sample_${(i + 1)
              .toString()
              .padStart(2, "0")}.webp`
        ),
      },
    },
  },
  {
    name: "頭像",
    link: "headshot",
    short_description: ["尺寸為1000x1000像素", "可指定表情、動作"],
    price: 800,
    price_description: [
      "如需背景，需另外加價",
      "如需差分，每個部位+NT$150，較複雜另計",
    ],
    steps: [
      {
        name: "草圖",
        description: [
          "確認配色、動作等，接受三次整體上的大改以及不限次數的顏色調整",
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
          "僅接受由我方繪師繪製失誤導致的顏色錯誤修改，稿費結清後將發送原圖或者psd檔",
        ],
      },
      {
        name: "交件",
        description: ["完稿提交原圖或者PSD檔"],
      },
    ],
    notice: [
      "稿件開始前的一周內請付清總價的50%作為訂金，一周後仍未支付訂金將自動作廢",
      "任何階段的訂金，請一周內付清否則不會繼續進行委託",
      "任意階段，非我方繪師作畫失誤導致的退單/不想要了等等情況下請支付當前階段的稿費，在此之前的稿費皆不退",
      "如草圖階段非我方繪師這邊的原因導致不想要了/退單，則不退訂金",
      "有問題請一併提出不要一問一答，不接受臨時提議修改大範圍內容",
    ],
    layout: (data: CommissionTypeModel) =>
      HeadshotSampleLayoutComponent({ data }),
    images: {
      thumbnail: "/headshot/headshot_thumbnail.png",
      samples: _.range(11).map(
        (i: number) =>
          `/headshot/headshot_sample_${(i + 1)
            .toString()
            .padStart(2, "0")}.webp`
      ),
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
    layout: (data: CommissionTypeModel) =>
      IllustrationLayoutComponent({ data }),
    images: {
      thumbnail: "/illustration/illustration_thumbnail.png",
      samples: _.range(3).map(
        (i: number) =>
          `/illustration/illustration_sample_${(i + 1)
            .toString()
            .padStart(2, "0")}.webp`
      ),
    },
  },
  {
    name: "人物設計草圖",
    link: "character_design",
    short_description: ["接受純文字設定或參考圖", "價格依複雜度做調整"],
    price: 2500,
    price_description: [
      '如需作為日後提供的 Live2D 角色立繪"範例"可與繪師溝通，如增加多種表情、髮型、瞳色等，此單項加購價格會根據複雜度而有所變動',
      "如本身已有完整設定參考圖只是想委託設計服裝的話價格依複雜度做調整",
      "上述條件底價為 NT$1300",
    ],
    steps: [
      {
        name: "草圖立繪",
        description: [
          "應付總價 100%",
          "確認配色、動作以及設計等，接受三次整體上的大改以及不限次數的顏色調整",
        ],
      },
      {
        name: "完稿",
        description: ["僅接受由我方繪師繪製失誤導致的顏色錯誤修改"],
      },
      {
        name: "交件",
        description: ["完稿提交原圖或者PSD檔"],
      },
    ],
    notice: [
      "稿件開始前的一周內請付清總價的50%作為訂金，一周後仍未支付訂金將自動作廢",
      "任何階段的訂金，請一周內付清否則不會繼續進行委託",
      "任意階段，非我方繪師作畫失誤導致的退單/不想要了等等情況下請支付當前階段的稿費，在此之前的稿費皆不退",
      "如草圖階段非我方繪師這邊的原因導致不想要了/退單，則不退訂金",
      "有問題請一併提出不要一問一答，不接受臨時提議修改大範圍內容",
      "若修改次數超過，則依照改動幅度每次酌收總額的 5%~20%",
    ],
    layout: (data: CommissionTypeModel) =>
      CharacterDesignLayoutComponent({ data }),
    images: {
      thumbnail: "/image.png",
      samples: _.range(4).map(
        (i: number) =>
          `/character-design/character_design_sample_${(i + 1)
            .toString()
            .padStart(2, "0")}.webp`
      ),
    },
    is_stop: true,
  },
  {
    name: "Vtuber Live2D 模型",
    link: "live2d",
    short_description: ["僅原畫拆分，不包含模型製作、三視圖"],
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
        description: ["完稿提交PSD檔"],
      },
    ],
    notice: [
      "稿件開始前的一周內請付清總價的50%作為訂金，一周後仍未支付訂金將自動作廢",
      "任何階段的訂金，請一周內付清否則不會繼續進行委託",
      "任意階段，非我方繪師作畫失誤導致的退單/不想要了等等情況下請支付當前階段的稿費，在此之前的稿費皆不退還",
      "如草圖階段非我方繪師這邊的原因導致不想要了/退單，則不退訂金",
      "有問題請一併提出不要一問一答，不接受臨時提議修改大範圍內容",
    ],
    layout: (data: CommissionTypeModel) => Live2DLayoutComponent({ data }),
    images: {
      thumbnail: "/image.png",
      samples: _.range(2).map(
        (i: number) =>
          `/live2d/live2d_sample_${(i + 1).toString().padStart(2, "0")}.webp`
      ),
    },
    is_stop: true,
  },
];
