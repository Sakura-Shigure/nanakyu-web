import { CommissionTypeModel } from "@/model/commission-type.model";

export const CommissionTypeData: CommissionTypeModel[] = [
  {
    id: "illustration",
    name: "插圖",
    short_description: [
      "一些介紹(第一行).......",
      "一些介紹(第二行).......",
      "一些介紹(第三行).......",
      "一些介紹(第四行).......",
      "一些介紹(第五行).......",
    ],
    price: 500,
  },
  {
    id: "stickers",
    name: "貼圖",
    short_description: ["有模板"],
    price: 500,
  },
  {
    id: "headshot",
    name: "頭貼",
    short_description: ["有模板"],
    price: 500,
  },
];
