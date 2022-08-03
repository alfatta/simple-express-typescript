import { Request, Response } from "express";
import APIResponse from "../helpers/response.helper";

export default class SampleController {
  static getAll(req: Request, res: Response) {
    res.status(200).send(APIResponse(200, "success"));
  }
  static insert(req: Request, res: Response) {
    res.status(200).send(APIResponse(200, "success", req.body));
  }
}
