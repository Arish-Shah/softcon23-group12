import cookieSession from "cookie-session";
import cors from "cors";
import express from "express";
import { cookieName, originUrl, port, sessionSecret } from "./config/constants";
import authRoutes from "./routes/auth";
import subRoutes from "./routes/sub";
import postRoutes from "./routes/post";

const main = async () => {
  const app = express();

  app.use(cors({ credentials: true, origin: originUrl }));
  app.use(
    cookieSession({
      name: cookieName,
      secret: sessionSecret,
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 1000 * 60 * 60 * 24 * 30,
    })
  );
  app.use(express.json());

  app.use("/api/auth", authRoutes);
  app.use("/api/post", postRoutes);
  app.use("/api", subRoutes);

  app.listen(port, () => console.log("server started 🚀"));
};

main().catch(console.log);
