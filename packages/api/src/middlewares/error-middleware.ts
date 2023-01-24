import type { BaseResponse } from "@/types";
import { globalMessages } from "@/util/constants";
import { HttpError } from "@/util/http-error";
import { HttpStatus } from "@/util/http-status";
import { ErrorRequestHandler } from "express";

export const errorMiddleware: ErrorRequestHandler = (
  err: HttpError,
  _,
  res: BaseResponse,
  next
) => {
  try {
    const status = err.status || HttpStatus.INTERNAL_SERVER_ERROR;
    const message = err.message || globalMessages.UNKNOWN_ERROR;

    return res.status(status).json({ ok: false, message });
  } catch (e) {
    return next(e);
  }
};
