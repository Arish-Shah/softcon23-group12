import { Env, validateEnv } from "@/util/validators";
import { config } from "dotenv";

config();
validateEnv();

export const {
  NODE_ENV,
  PORT,
  COOKIE_NAME,
  SESSION_SECRET,
  REDDIT_URL,
  WEB_URL,
} = process.env as Env;
