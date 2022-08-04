import { Request, Response } from "express";
import APIResponse from "../helpers/response.helper";

export default class SampleController {
  /**
   * @api {GET} /sample Get sample data
   * @apiName Get sample data
   * @apiGroup Sample
   * @apiSuccessExample {json} Success Example:
   *     HTTP/1.1 200 OK
   *     {
   *       "status": 200,
   *       "message": "success",
   *       "data": null,
   *       "meta": null
   *     }
   */
  static getAll(req: Request, res: Response) {
    res.status(200).send(APIResponse(200, "success"));
  }

  /**
   * @api {POST} /sample Insert sample data
   * @apiName Insert sample data
   * @apiGroup Sample
   * @apiQuery {number} page Page number
   * @apiBody {string{..50}} name User name
   * @apiSuccessExample {json} Success Example:
   *     HTTP/1.1 200 OK
   *     {
   *       "status": 200,
   *       "message": "success",
   *       "data": null,
   *       "meta": null
   *     }
   * @apiErrorExample {json} Error Example:
   *     HTTP/1.1 400 Bad Request
   *     {
   *       "status": 400,
   *       "message": "body: \"name\" must be a string",
   *       "data": null,
   *       "meta": null
   *     }
   */
  static insert(req: Request, res: Response) {
    res.status(200).send(APIResponse(200, "success"));
  }
}
