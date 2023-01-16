import express from "express";
import cors from "cors";
import { originUrl, port } from "./config/constants";
import authRoutes from "./routes/auth";

const app = express();

app.use(cors({ credentials: true, origin: originUrl }));
app.use(express.json());

app.use("/auth", authRoutes);

app.listen(port, () => console.log("server started 🚀"));
