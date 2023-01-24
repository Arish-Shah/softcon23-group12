import { z } from "zod";
import {
  authMessages,
  passwordMessages,
  saveMessages,
  userMessages,
  usernameRegex,
} from "./constants";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]),
  PORT: z.string(),
  COOKIE_NAME: z.string(),
  SESSION_SECRET: z.string(),
  REDDIT_URL: z.string(),
  WEB_URL: z.string(),
});

const authInputSchema = z.object({
  username: z
    .string()
    .regex(usernameRegex, { message: authMessages.INVALID_USERNAME }),
  password: z.string().min(5, { message: authMessages.INVALID_PASSWORD }),
});

const saveInputSchema = z.object({
  id: z.string().length(7, { message: saveMessages.INVALID_ID }),
  title: z.string(),
  url: z.string().startsWith("https://", { message: saveMessages.INVALID_URL }),
  sub: z.string().min(1, { message: saveMessages.INVALID_SUB }),
});

const userInputSchema = z.object({
  username: z
    .string()
    .regex(usernameRegex, { message: userMessages.INVALID_USERNAME }),
  name: z.string().optional(),
});

const passwordInputSchema = z
  .object({
    password: z.string().min(5, { message: passwordMessages.INVALID_PASSWORD }),
    confirmPassword: z
      .string()
      .min(5, { message: passwordMessages.INVALID_PASSWORD }),
    oldPassword: z
      .string()
      .min(5, { message: passwordMessages.INVALID_PASSWORD }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password != confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: passwordMessages.DO_NOT_MATCH,
      });
    }
  });

export type Env = z.infer<typeof envSchema>;
export type AuthInput = z.infer<typeof authInputSchema>;
export type SaveInput = z.infer<typeof saveInputSchema>;
export type UserInput = z.infer<typeof userInputSchema>;
export type PasswordInput = z.infer<typeof passwordInputSchema>;

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

export const validateSaveInput = (input: SaveInput) => {
  try {
    saveInputSchema.parse(input);
    return null;
  } catch (e) {
    return (e as z.ZodError).issues[0]?.message || null;
  }
};

export const validateUserInput = (input: UserInput) => {
  try {
    userInputSchema.parse(input);
    return null;
  } catch (e) {
    return (e as z.ZodError).issues[0]?.message || null;
  }
};

export const validatePasswordInput = (input: PasswordInput) => {
  try {
    passwordInputSchema.parse(input);
    return null;
  } catch (e) {
    return (e as z.ZodError).issues[0]?.message || null;
  }
};
