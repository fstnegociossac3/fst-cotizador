import { successResponse } from "@/shared/lib/http-response";

export async function GET() {
  return successResponse({
    service: "fst-cotizador",
    status: "ok",
    timestamp: new Date().toISOString(),
  });
}
