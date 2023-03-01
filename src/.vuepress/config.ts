import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      // lang: "en-US",
      lang: "zh-CN",
      title: "B示例",
      description: "个人博客zs",
    },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "博客演示",
    //   description: "vuepress-theme-hope 的博客演示",
    // },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
