import type { BaseResponse } from "@/types";
import { globalMessages } from "@/util/constants";
import { HttpError } from "@/util/http-error";
import { HttpStatus } from "@/util/http-status";
import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (
  err,
  _,
  res: BaseResponse,
  next
) => {
  console.log("here i am");

  if (err instanceof HttpError) {
    return res
      .status((err as HttpError).status)
      .json({ ok: false, error: err.message });
  }
  return res
    .status(HttpStatus.INTERNAL_SERVER_ERROR)
    .json({ ok: false, error: globalMessages.UNKNOWN_ERROR });
};
