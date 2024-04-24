import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://shop.cookdtv.com",
  match: "https://shop.cookdtv.com/**",
  maxPagesToCrawl: 5000,
  outputFileName: "output.json",
  maxFileSize: 1
};
