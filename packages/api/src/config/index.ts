import { Env, validateEnv } from "@/util/validators";
import { config } from "dotenv";

config();
validateEnv();

export const { NODE_ENV, PORT, COOKIE_NAME, SESSION_SECRET } =
  process.env as Env;
