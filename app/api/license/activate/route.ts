import { NextRequest, NextResponse } from "next/server"
import {
  PolarActivationResponse,
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
    const deviceId = String(body.deviceId ?? "").trim()
    const deviceLabel = String(body.deviceLabel ?? "Mac").trim() || "Mac"

    if (!key) {
      return jsonError("License key is required")
    }

    if (!deviceId) {
      return jsonError("Device id is required")
    }

    const validation = await polarRequest<PolarLicenseValidation>("/license-keys/validate", { key })

    if (!validation.data) {
      return jsonError(validation.error ?? "Invalid license key", validation.response.status)
    }

    if (validation.data.status !== "granted") {
      return jsonError(`This license key is ${validation.data.status}`, 403)
    }

    const limit = validation.data.limit_activations
    if (typeof limit === "number" && validation.data.usage >= limit) {
      return jsonError(`This license key has reached its activation limit (${limit} devices)`, 403)
    }

    const activation = await polarRequest<PolarActivationResponse>("/license-keys/activate", {
      key,
      label: deviceLabel,
      meta: {
        device_id: deviceId,
      },
    })

    if (!activation.data) {
      return jsonError(activation.error ?? "Activation failed", activation.response.status)
    }

    return NextResponse.json({
      ok: true,
      license: {
        id: validation.data.id,
        key: validation.data.key,
        displayKey: validation.data.display_key,
        status: validation.data.status,
        limitActivations: validation.data.limit_activations ?? null,
        usage: validation.data.usage,
        expiresAt: validation.data.expires_at ?? null,
      },
      activation: {
        id: activation.data.id,
        licenseKeyId: activation.data.license_key_id,
        label: activation.data.label,
        createdAt: activation.data.created_at,
      },
    })
  } catch (error) {
    return jsonError(error instanceof Error ? error.message : "License activation failed", 500)
  }
}
