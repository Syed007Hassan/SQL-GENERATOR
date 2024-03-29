import express from "express";
import http from "http";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import path from "path";
import morgan from "morgan";

import { connectDb, mongooseDisconnect } from "./db/mongo";
import authRouter from "./routes/auth.routes";
import userRouter from "./routes/user.routes";
import sqlRouter from "./routes/sql.routes";

dotenv.config();

const app = express();
const dir = __dirname;
const port: string = process.env.PORT;

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(compression());
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//all routes
app.use("/api/sql", sqlRouter);
// app.use("/api/auth", authRouter);
// app.use("/api/users", userRouter);

const startServer = async () => {
  // await connectDb();
  const port: number = 5000;
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

startServer();
