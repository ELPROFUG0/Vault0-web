import { NextRequest, NextResponse } from "next/server"
import {
  PolarLicenseValidation,
  cleanLicenseKey,
  jsonError,
  polarRequest,
} from "../polar"

export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}))
    const key = cleanLicenseKey(body.key)

    if (!key) {
      return jsonError("License key is required")
    }

    const result = await polarRequest<PolarLicenseValidation>("/license-keys/validate", { key })

    if (!result.data) {
      return jsonError(result.error ?? "Invalid license key", result.response.status)
    }

    return NextResponse.json({
      ok: true,
      license: mapLicense(result.data),
    })
  } catch (error) {
    return jsonError(error instanceof Error ? error.message : "License validation failed", 500)
  }
}

function mapLicense(license: PolarLicenseValidation) {
  return {
    id: license.id,
    key: license.key,
    displayKey: license.display_key,
    status: license.status,
    limitActivations: license.limit_activations ?? null,
    usage: license.usage,
    expiresAt: license.expires_at ?? null,
  }
}
