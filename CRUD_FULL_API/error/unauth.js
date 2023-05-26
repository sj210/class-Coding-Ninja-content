const CustomError = require("./custom-error");
module.exports = class UnAuth extends CustomError {
  statusCode = 403;
  reason = "Not Authorized";

  constructor(msg) {
    super(msg);
    Object.setPrototypeOf(BadRequest, CustomError.prototype);
  }

  seralizeError(err) {
    return [
      {
        ...err,
        msg: this.reason,
      },
    ];
  }
};
