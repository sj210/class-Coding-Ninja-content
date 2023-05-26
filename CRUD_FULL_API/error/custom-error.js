module.exports = class CustomError extends Error {
    statusCode;
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(CustomError, Error.prototype);
    }

    seralizeError() {};
}