import { feedSubs, redditUrl } from "./constants";

export const createFeedUrl = (sub: string = feedSubs) => {
  return `${redditUrl}/r/${sub}.json`;
};

export const createPostUrl = (id: string) => {
  return `${redditUrl}/${id}.json`;
};
