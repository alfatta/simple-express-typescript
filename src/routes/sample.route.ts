import { Router } from "express";

import SampleController from "../controllers/sample.controller";
import SampleValidator from "../validators/sample.validator";

const SampleRoute: Router = Router();

SampleRoute.get("/", SampleController.getAll);

SampleRoute.post(
  "/",
  SampleValidator.validateInsertUserBody(),
  SampleController.insert
);

SampleRoute.post(
  "/:userId/assets",
  SampleValidator.validateInsertAssetsParam(),
  SampleValidator.validateInsertAssetsBody(),
  SampleController.insertAsset
);

export default SampleRoute;
