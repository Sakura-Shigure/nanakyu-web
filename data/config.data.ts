import { ConfigModel } from "@/model/config.model";

export const ConfigData: ConfigModel = {
  baseRoute: [
    { name: "首頁", link: "" },
    { name: "價目表", link: "pricing" },
    { name: "注意事項", link: "notice" },
    { name: "作品範例", link: "sample" },
  ],
  // pageNotice: "目前網站正在施工中，價目表非真實委託價格",
  mainTitle: "奶加",
  logo: {
    image: "/favicon.png", // max ratio: 1:3
    text: "奶加",
  },
};
