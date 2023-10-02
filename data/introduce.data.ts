import { IntroduceModel } from "@/model/introduce.model";

export const IntroduceData: IntroduceModel = {
  name: "奶加",
  logo: "/logo.png",
  description: [
    "主接角色設計、L2D立繪、直播模板",
    "擅長女性角色或可愛型男孩",
    "不接多人、夢圖、R18、非人、中老年",
  ],
  contact: {
    twitter: {
      showOnTopbar: true,
      url: "https://twitter.com/hellojoyin",
    },
    twitch: {
      showOnTopbar: true,
      url: "https://www.twitch.tv/nanakyuu301",
    },
    discord: "@naijia.",
  },
  // stop_commission: true,
};
