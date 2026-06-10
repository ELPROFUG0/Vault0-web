import { NextRequest, NextResponse } from "next/server"
import { cleanLicenseKey, jsonError, polarRequest } from "../polar"

export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}))
    const key = cleanLicenseKey(body.key)
    const activationId = String(body.activationId ?? "").trim()

    if (!key) {
      return jsonError("License key is required")
    }

    if (!activationId) {
      return jsonError("Activation id is required")
    }

    const result = await polarRequest<unknown>("/license-keys/deactivate", {
      key,
      activation_id: activationId,
    })

    if (!result.response.ok) {
      return jsonError(result.error ?? "Deactivation failed", result.response.status)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    return jsonError(error instanceof Error ? error.message : "License deactivation failed", 500)
  }
}
