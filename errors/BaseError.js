class BaseError extends Error {
  constructor({ message, args, cause }) {
    super(message);
    this.name = this.constructor.name;
    this.args = args;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    if (cause) {
      this.stack += `\nCaused by: ${cause.stack}`;
    }
  }
}

module.exports = BaseError;
