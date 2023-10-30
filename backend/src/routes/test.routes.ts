import { Router } from "express";
import { createAssessment } from "../controllers/test.controller";

const testRouter = Router();

testRouter.post("/test", createAssessment);

export default testRouter;
