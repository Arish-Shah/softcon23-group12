import { z } from "zod";
import { authMessages } from "./constants";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]),
  PORT: z.string(),
  COOKIE_NAME: z.string(),
  SESSION_SECRET: z.string(),
  REDDIT_URL: z.string(),
});

const authInputSchema = z.object({
  username: z
    .string()
    .regex(/[a-zA-Z0-9_]{3,8}/, { message: authMessages.INVALID_USERNAME }),
  password: z.string().min(5, { message: authMessages.INVALID_PASSWORD }),
});

export type Env = z.infer<typeof envSchema>;
export type AuthInput = z.infer<typeof authInputSchema>;

export const validateEnv = () => {
  try {
    envSchema.parse(process.env);
  } catch (e) {
    console.log("❌ properties missing from .env file");
  }
};

export const validateAuthInput = (input: AuthInput) => {
  try {
    authInputSchema.parse(input);
    return null;
  } catch (e) {
    return (e as z.ZodError).issues[0]?.message || null;
  }
};
