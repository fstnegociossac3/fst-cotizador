import { NextResponse } from "next/server";

import type { ApiError, ApiSuccess } from "@/shared/types/api.types";

export function successResponse<T>(data: T, status = 200) {
  const body: ApiSuccess<T> = {
    success: true,
    data,
  };

  return NextResponse.json(body, {
    status,
  });
}

export function errorResponse(
  code: string,
  message: string,
  status = 400,
  details?: unknown,
) {
  const body: ApiError = {
    success: false,

    error: {
      code,
      message,
      details,
    },
  };

  return NextResponse.json(body, {
    status,
  });
}
