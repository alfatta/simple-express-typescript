import { NextFunction, Request, Response, Router } from "express";
import createHttpError from "http-errors";

import SampleRoute from "./sample.route";

const routes: Router = Router();

routes.use("/sample", SampleRoute);

// 404 fallback
routes.use((req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound());
});

export default routes;
