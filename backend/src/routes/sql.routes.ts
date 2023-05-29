import { Router } from "express";
import { getCompletions } from "../controllers/sql.controller";

const sqlRouter = Router();

sqlRouter.post("/completions", getCompletions);

export default sqlRouter;
