const CustomError = require("./custom-error");

module.exports = class BadRequest extends CustomError {
  statusCode = 400;
  reason = 'Bad Request';

  constructor(msg,errors) {
    super(msg);
    this.msg = msg;
    this.errors = errors;
    Object.setPrototypeOf(BadRequest, CustomError.prototype);
  }

  serializeError() {
    return [{
      errors: this.errors ?? [],
      msg: this.msg ?? this.reason
    }];
  }
};