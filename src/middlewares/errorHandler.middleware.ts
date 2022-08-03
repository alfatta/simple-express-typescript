import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import APIResponse from "../helpers/response.helper";

function errorHandler(): ErrorRequestHandler {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (err: HttpError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status);
    res.send(APIResponse(err.status, err.message));
  };
}

export default errorHandler;
