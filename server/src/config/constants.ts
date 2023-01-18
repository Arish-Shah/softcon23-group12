import dotenv from "dotenv";

dotenv.config();

export const port = process.env.PORT || 8000;
export const originUrl = process.env.ORIGIN_URL || "http://localhost:5173";
export const cookieName = process.env.COOKIE_NAME || "session";
export const sessionSecret = process.env.SESSION_SECRET || "keyboard cat";
export const redditUrl = process.env.REDDIT_URL || "https://reddit.com";

export const feedSubs =
  "pics+wallpaper+photoshopbattles+itookapicture+dogpictures+TheWayWeWere+pic+Miniworlds+images+cats";
