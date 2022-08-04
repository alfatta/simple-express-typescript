import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import Joi, { ObjectSchema } from "joi";

export default class Validator {
  static validateBody(rules: ObjectSchema | object) {
    return this.validate("body", rules);
  }

  static validateQuery(rules: ObjectSchema | object) {
    return this.validate("query", rules);
  }

  static validateParams(rules: ObjectSchema | object) {
    return this.validate("params", rules);
  }

  static validate(object: keyof Request, rules: ObjectSchema | object) {
    const _rules = Joi.isSchema(rules) ? rules : Joi.object(rules);
    return (req: Request, res: Response, next: NextFunction) => {
      const result = _rules.validate(req[object]);
      if (result.error) {
        return next(
          new createHttpError.BadRequest(
            `${object.toString()}: ${result.error.message}`
          )
        );
      }
      return next();
    };
  }
}
