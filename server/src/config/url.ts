import { redditUrl } from "./constants";

export const createFeedUrl = (sub: string = "pics+gifs") => {
  return `${redditUrl}/r/${sub}/top.json?t=all`;
};
