export type BaseResponse = {
  ok: boolean;
  message: string;
};

export type AuthResponse = BaseResponse & {
  username: string | null;
};

export type FeedResponse = BaseResponse & {
  posts: PostType[];
};

export type PostType = {
  id: string;
  title: string;
  author: string;
  url: string;
  sub: string;
  permalink: string;
  saved: boolean;
};
