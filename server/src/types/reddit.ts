export type SubRoot = {
  kind: string;
  data: Data;
};

export type Data = {
  after: string;
  dist: number;
  modhash: string;
  geo_filter: any;
  children: Children[];
  before: any;
};

export type Children = {
  kind: string;
  data: Data2;
};

export type Data2 = {
  approved_at_utc: any;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title: any;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: any[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: number;
  link_flair_css_class?: string;
  downs: number;
  thumbnail_height: number;
  top_awarded_type: any;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color?: string;
  upvote_ratio: number;
  author_flair_background_color?: string;
  subreddit_type: string;
  ups: number;
  total_awards_received: number;
  media_embed: MediaEmbed;
  thumbnail_width: number;
  author_flair_template_id: any;
  is_original_content: boolean;
  user_reports: any[];
  secure_media: any;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: any;
  secure_media_embed: SecureMediaEmbed;
  link_flair_text?: string;
  can_mod_post: boolean;
  score: number;
  approved_by: any;
  is_created_from_ads_ui: boolean;
  author_premium: boolean;
  thumbnail: string;
  edited: boolean;
  author_flair_css_class?: string;
  author_flair_richtext: any[];
  gildings: Gildings;
  post_hint?: string;
  content_categories: string[];
  is_self: boolean;
  mod_note: any;
  created: number;
  link_flair_type: string;
  wls: number;
  removed_by_category: any;
  banned_by: any;
  author_flair_type: string;
  domain: string;
  allow_live_comments: boolean;
  selftext_html: any;
  likes: any;
  suggested_sort: any;
  banned_at_utc: any;
  url_overridden_by_dest: string;
  view_count: any;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  preview?: Preview;
  all_awardings: AllAwarding[];
  awarders: any[];
  media_only: boolean;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: any;
  treatment_tags: any[];
  visited: boolean;
  removed_by: any;
  num_reports: any;
  distinguished: any;
  subreddit_id: string;
  author_is_blocked: boolean;
  mod_reason_by: any;
  removal_reason: any;
  link_flair_background_color?: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons: any;
  author: string;
  discussion_type: any;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: string;
  contest_mode: boolean;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color?: string;
  permalink: string;
  parent_whitelist_status: string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media: any;
  is_video: boolean;
  is_gallery?: boolean;
  media_metadata?: MediaMetadata;
  gallery_data?: GalleryData;
  link_flair_template_id?: string;
  author_cakeday?: boolean;
};

export type MediaEmbed = {};

export type SecureMediaEmbed = {};

export type Gildings = {
  gid_2?: number;
};

export type Preview = {
  images: Image[];
  enabled: boolean;
};

export type Image = {
  source: Source;
  resolutions: Resolution[];
  variants: Variants;
  id: string;
};

export type Source = {
  url: string;
  width: number;
  height: number;
};

export type Resolution = {
  url: string;
  width: number;
  height: number;
};

export type Variants = {
  obfuscated?: Obfuscated;
  nsfw?: Nsfw;
};

export type Obfuscated = {
  source: Source2;
  resolutions: Resolution2[];
};

export type Source2 = {
  url: string;
  width: number;
  height: number;
};

export type Resolution2 = {
  url: string;
  width: number;
  height: number;
};

export type Nsfw = {
  source: Source3;
  resolutions: Resolution3[];
};

export type Source3 = {
  url: string;
  width: number;
  height: number;
};

export type Resolution3 = {
  url: string;
  width: number;
  height: number;
};

export type AllAwarding = {
  giver_coin_reward: any;
  subreddit_id: any;
  is_new: boolean;
  days_of_drip_extension: any;
  coin_price: number;
  id: string;
  penny_donate: any;
  award_sub_type: string;
  coin_reward: number;
  icon_url: string;
  days_of_premium?: number;
  tiers_by_required_awardings: any;
  resized_icons: ResizedIcon[];
  icon_width: number;
  static_icon_width: number;
  start_date: any;
  is_enabled: boolean;
  awardings_required_to_grant_benefits: any;
  description: string;
  end_date: any;
  sticky_duration_seconds: any;
  subreddit_coin_reward: number;
  count: number;
  static_icon_height: number;
  name: string;
  resized_static_icons: ResizedStaticIcon[];
  icon_format?: string;
  icon_height: number;
  penny_price?: number;
  award_type: string;
  static_icon_url: string;
};

export type ResizedIcon = {
  url: string;
  width: number;
  height: number;
};

export type ResizedStaticIcon = {
  url: string;
  width: number;
  height: number;
};

export type MediaMetadata = {
  "2yjla8my5fca1": N2yjla8my5fca1;
  pmevxfdy5fca1: Pmevxfdy5fca1;
  gvxfpwuy5fca1: Gvxfpwuy5fca1;
};

export type N2yjla8my5fca1 = {
  status: string;
  e: string;
  m: string;
  p: P[];
  s: S;
  id: string;
};

export type P = {
  y: number;
  x: number;
  u: string;
};

export type S = {
  y: number;
  x: number;
  u: string;
};

export type Pmevxfdy5fca1 = {
  status: string;
  e: string;
  m: string;
  p: P2[];
  s: S2;
  id: string;
};

export type P2 = {
  y: number;
  x: number;
  u: string;
};

export type S2 = {
  y: number;
  x: number;
  u: string;
};

export type Gvxfpwuy5fca1 = {
  status: string;
  e: string;
  m: string;
  p: P3[];
  s: S3;
  id: string;
};

export type P3 = {
  y: number;
  x: number;
  u: string;
};

export type S3 = {
  y: number;
  x: number;
  u: string;
};

export type GalleryData = {
  items: Item[];
};

export type Item = {
  media_id: string;
  id: number;
};
