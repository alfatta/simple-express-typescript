import Joi from "joi";

import Validator from ".";

export default class SampleValidator extends Validator {
  static validateInsertUserBody() {
    return this.validateBody({
      name: Joi.string().max(50).required(),
      email: Joi.string().email().max(50).required(),
    });
  }
  static validateInsertAssetsBody() {
    return this.validateBody({
      asset: Joi.string().max(50).required(),
    });
  }
  static validateInsertAssetsParam() {
    return this.validateParams({
      userId: Joi.number().required(),
    });
  }
}
