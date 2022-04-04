const BaseError = require('./BaseError');

class UserInputError extends BaseError {
  constructor({ message, args, cause, code }) {
    super({ message, args, cause });
    this.name = this.constructor.name;
    this.args = args;
    this.code = code || 400;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    if (cause) {
      this.stack += `\nCaused by: ${cause.stack}`;
    }
  }
}

module.exports = UserInputError;
