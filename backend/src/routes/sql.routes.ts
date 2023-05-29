import { Router } from "express";

const sqlRouter = Router();

sqlRouter.post("/completions", getCompletions);

export default sqlRouter;
