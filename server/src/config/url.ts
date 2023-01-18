import { feedSubs, redditUrl } from "./constants";

export const createFeedUrl = (sub: string = feedSubs) => {
  return `${redditUrl}/r/${sub}.json`;
};
