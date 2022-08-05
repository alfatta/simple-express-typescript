import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

import logger from "../helpers/logger.helper";
import APIResponse from "../helpers/response.helper";
import UserRepository from "../repositories/user.repository";

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
   *       "data": [
   *          {
   *            "id": 1,
   *            "name": "User 1",
   *            "email": "user.1@mailinator.com",
   *            "createdAt": "2022-08-08T07:05:15.000Z",
   *            "updatedAt": "2022-08-08T07:05:15.000Z",
   *            "deletedAt": null,
   *            "assets": [
   *                {
   *                    "id": 1,
   *                    "asset": "Mobil",
   *                    "createdAt": "2022-08-08T07:05:43.000Z",
   *                    "updatedAt": "2022-08-08T07:05:43.000Z",
   *                    "deletedAt": null,
   *                    "userId": 1
   *                },
   *                {
   *                    "id": 2,
   *                    "asset": "Motor",
   *                    "createdAt": "2022-08-08T07:05:48.000Z",
   *                    "updatedAt": "2022-08-08T07:05:48.000Z",
   *                    "deletedAt": null,
   *                    "userId": 1
   *                }
   *            ]
   *         },
   *       ],
   *       "meta": {
   *         "count": 2
   *       }
   *     }
   */
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserRepository.getAllUser();
      res
        .status(200)
        .send(APIResponse(200, "success", users.rows, { count: users.count }));
    } catch (error: unknown) {
      if (typeof error === "string") {
        logger.error(error);
        return next(new createHttpError.InternalServerError(error));
      } else if (error instanceof Error) {
        logger.error(error.message);
        return next(new createHttpError.InternalServerError(error.message));
      }
    }
  }

  /**
   * @api {POST} /sample Insert sample data
   * @apiName Insert sample data
   * @apiGroup Sample
   * @apiBody {string{..50}} name User name
   * @apiBody {string{..50}} name User email
   * @apiSuccessExample {json} Success Example:
   *     HTTP/1.1 200 OK
   *     {
   *       "status": 200,
   *       "message": "success",
   *       "data": {
   *           "id": 1,
   *           "name": "User 2",
   *           "email": "user.2@mailinator.com",
   *           "updatedAt": "2022-08-08T07:16:40.322Z",
   *           "createdAt": "2022-08-08T07:16:40.322Z"
   *       },
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
  static async insert(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await UserRepository.insertUser({
        name: req.body.name,
        email: req.body.email,
      });

      res.status(200).send(APIResponse(200, "success", result));
    } catch (error: unknown) {
      if (typeof error === "string") {
        logger.error(error);
        return next(new createHttpError.InternalServerError(error));
      } else if (error instanceof Error) {
        logger.error(error.message);
        return next(new createHttpError.InternalServerError(error.message));
      }
    }
  }

  /**
   * @api {POST} /sample/:userId/assets Insert user asset
   * @apiName Insert user asset
   * @apiGroup Sample
   * @apiParam {number} userId Id of user
   * @apiBody {string{..50}} asset User asset
   * @apiSuccessExample {json} Success Example:
   *     HTTP/1.1 200 OK
   *     {
   *       "status": 200,
   *       "message": "success",
   *       "data": {
   *         "id": 1,
   *         "userId": 1,
   *         "asset": "Motor",
   *         "updatedAt": "2022-08-08T07:20:14.859Z",
   *         "createdAt": "2022-08-08T07:20:14.859Z"
   *       },
   *       "meta": null
   *     }
   * @apiErrorExample {json} Error No User Example:
   *     HTTP/1.1 404 Bad Request
   *     {
   *       "status": 404,
   *       "message": "User not found",
   *       "data": null,
   *       "meta": null
   *     }
   * @apiErrorExample {json} Error Request Example:
   *     HTTP/1.1 400 Bad Request
   *     {
   *       "status": 400,
   *       "message": "body: \"asset\" must be a string",
   *       "data": null,
   *       "meta": null
   *     }
   */
  static async insertAsset(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await UserRepository.getUserById(Number(req.params.userId));
      if (!user) {
        return next(new createHttpError.NotFound("User not found"));
      }

      const result = await UserRepository.insertAsset({
        userId: user.id,
        asset: req.body.asset,
      });

      res.status(200).send(APIResponse(200, "success", result));
    } catch (error: unknown) {
      if (typeof error === "string") {
        logger.error(error);
        return next(new createHttpError.InternalServerError(error));
      } else if (error instanceof Error) {
        logger.error(error.message);
        return next(new createHttpError.InternalServerError(error.message));
      }
    }
  }
}
