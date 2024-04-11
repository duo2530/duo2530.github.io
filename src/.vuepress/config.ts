import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({

  base: "/",

  locales: {
     "/": {
      lang: "zh-CN",
      title: "知识库",
      description: "保存技术博客和知识库",
    },
    "/en/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    }
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
