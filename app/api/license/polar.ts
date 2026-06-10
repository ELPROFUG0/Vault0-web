import { NextResponse } from "next/server"

type JsonObject = Record<string, unknown>

export type PolarLicenseValidation = {
  id: string
  organization_id: string
  user_id?: string | null
  customer_id?: string | null
  benefit_id: string
  key: string
  display_key: string
  status: string
  limit_activations?: number | null
  usage: number
  limit_usage?: number | null
  validations: number
  last_validated_at?: string | null
  expires_at?: string | null
}

export type PolarActivationResponse = {
  id: string
  license_key_id: string
  label: string
  meta?: Record<string, string> | null
  created_at: string
  modified_at?: string | null
}

type PolarConfig = {
  apiBaseUrl: string
  accessToken: string
  organizationId: string
}

export function readPolarConfig(): PolarConfig {
  const accessToken = process.env.POLAR_ACCESS_TOKEN
  const organizationId = process.env.POLAR_ORGANIZATION_ID
  const apiBaseUrl = process.env.POLAR_API_BASE_URL ?? "https://sandbox-api.polar.sh/v1"

  if (!accessToken || !organizationId) {
    throw new Error("Missing Polar license environment variables")
  }

  return { apiBaseUrl, accessToken, organizationId }
}

export function cleanLicenseKey(value: unknown): string {
  return String(value ?? "")
    .trim()
    .replace(/\s/g, "")
}

export function jsonError(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status })
}

export async function polarRequest<T>(
  path: string,
  body: JsonObject
): Promise<{ data: T | null; response: Response; error: string | null }> {
  const config = readPolarConfig()
  const response = await fetch(`${config.apiBaseUrl}${path}`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${config.accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...body,
      organization_id: config.organizationId,
    }),
    cache: "no-store",
  })

  const text = await response.text()
  const parsed = text ? safeParseJSON(text) : null

  if (!response.ok) {
    return {
      data: null,
      response,
      error: extractPolarError(parsed) ?? `Polar request failed (${response.status})`,
    }
  }

  return {
    data: parsed as T,
    response,
    error: null,
  }
}

function safeParseJSON(text: string): unknown {
  try {
    return JSON.parse(text)
  } catch {
    return null
  }
}

function extractPolarError(value: unknown): string | null {
  if (!value || typeof value !== "object") return null

  const record = value as Record<string, unknown>
  const detail = record.detail
  const error = record.error

  if (typeof detail === "string") return detail
  if (typeof error === "string") return error

  return null
}
