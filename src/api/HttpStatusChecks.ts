export enum HttpStatus {
  Unauthorized = 401,
}

export class HttpError extends Error {
  public readonly code: HttpStatus;

  constructor(code: HttpStatus, msg: string) {
    super(msg);
    this.code = code;

    Object.setPrototypeOf(this, HttpError.prototype);
  }
}

export class HttpUnauthorizedError extends HttpError {
  constructor(msg: string) {
    super(HttpStatus.Unauthorized, msg);

    Object.setPrototypeOf(this, HttpUnauthorizedError.prototype);
  }
}

export function isUnauthorized(status: number) {
  return status === HttpStatus.Unauthorized;
}

export function buildHttpError(status: HttpStatus, data: any) {
  const msg =
    "message" in data
      ? data["message"]
      : "error" in data
      ? data["error"]
      : "Failed to fetch data";
  console.log(msg);

  if (isUnauthorized(status)) throw new HttpUnauthorizedError(msg);

  return new HttpError(status, msg);
}
