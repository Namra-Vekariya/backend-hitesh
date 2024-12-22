class ApiError extends Error {
  constructor(
    statuscode,
    message = " Something went wrong",
    errors = [],
    statck = ""
  ) {
    super(message);
    this.statuscode = statuscode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    // use to find error in perticuler file ,remove in production
    if (statck) {
      this.statck = statck;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export { ApiError };
