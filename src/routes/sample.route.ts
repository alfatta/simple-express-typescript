import { Router } from "express";

import SampleController from "../controllers/sample.controller";

const SampleRoute: Router = Router();

SampleRoute.get("/", SampleController.getAll);
SampleRoute.post("/", SampleController.insert);

export default SampleRoute;
