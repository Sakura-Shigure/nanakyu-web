import { ConfigModel } from "@/model/config.model";

export const ConfigData: ConfigModel = {
  baseRoute: [
    { name: "首頁", link: "" },
    { name: "價目表", link: "pricing" },
    { name: "注意事項", link: "notice" },
    { name: "作品範例", link: "sample" },
  ],
  mainTitle: "奶加",
  logo: {
    // image: "/image.png",
    text: "奶加",
  },
};
