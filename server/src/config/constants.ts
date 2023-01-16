import dotenv from "dotenv";

dotenv.config();

export const port = process.env.PORT || 8000;
export const originUrl = process.env.ORIGIN_URL || "http://localhost:5173";
