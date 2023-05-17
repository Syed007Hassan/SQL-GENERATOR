import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

const PORT: Number = 5000;

const app: Application = express();
app.use(cors());
app.use(express.json());

// const openai: Configuration = new OpenAIApi(process.env.OPENAI_API_KEY);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
