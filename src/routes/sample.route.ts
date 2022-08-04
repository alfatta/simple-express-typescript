import { Router } from "express";

import SampleController from "../controllers/sample.controller";
import SampleValidator from "../validators/sample.validator";

const SampleRoute: Router = Router();

SampleRoute.get("/", SampleController.getAll);
SampleRoute.post(
  "/",
  SampleValidator.validateInsertBody(),
  SampleValidator.validateInsertQuery(),
  SampleController.insert
);

export default SampleRoute;
