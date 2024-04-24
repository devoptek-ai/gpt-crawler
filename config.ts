import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://cookdtv.com",
  match: "https://cookdtv.com/**",
  maxPagesToCrawl: 5000,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
