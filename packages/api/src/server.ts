import express from "express";
import { COOKIE_NAME, PORT, SESSION_SECRET } from "./config";
import authRoutes from "./routes/auth";
import feedRoutes from "./routes/feed";
import postRoutes from "./routes/post";
import userRoutes from "./routes/user";
import cookieSession from "cookie-session";
import { errorHandler } from "./middleware/error-handler";

const app = express();

app.use(express.json());
app.use(
  cookieSession({
    name: COOKIE_NAME,
    secret: SESSION_SECRET,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 1000 * 60 * 60 * 24 * 30,
  })
);

app.use("/auth", authRoutes);
app.use("/feed", feedRoutes);
app.use("/post", postRoutes);
app.use("/user", userRoutes);

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT} 🚀`)
);
