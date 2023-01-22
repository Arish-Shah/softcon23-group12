import { HttpStatus } from "@/util/http-status";

export class HttpError extends Error {
  public status: HttpStatus;

  constructor(status: HttpStatus, message: string) {
    super(message);
    this.name = "HttpError";
    this.status = status;
  }
}
