import Joi from "joi";

import Validator from ".";

export default class SampleValidator extends Validator {
  static validateInsertBody() {
    return this.validateBody({
      name: Joi.string().max(50).required(),
    });
  }

  static validateInsertQuery() {
    return this.validateQuery({
      page: Joi.number().required(),
    });
  }
}
