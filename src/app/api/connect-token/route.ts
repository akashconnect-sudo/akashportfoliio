import { createHmac } from "crypto";
import { NextResponse } from "next/server";

const WIDGET_ID_FALLBACK = "dd9c4fb4-37f7-4008-a3e3-df859d391fb6";
/** Amazon allows at most 10 minutes between iat and exp. */
const TOKEN_TTL_SECONDS = 500;

function base64url(value: string) {
  return Buffer.from(value).toString("base64url");
}

/**
 * Signs a short-lived JWT for the hosted Amazon Connect chat widget.
 * The security key stays on the server. The browser only receives the token.
 * Response shape matches the official snippet: callback(data.data)
 */
export async function GET() {
  const secret = process.env.CONNECT_WIDGET_SECURITY_KEY?.trim();
  const widgetId = process.env.CONNECT_WIDGET_ID?.trim() || WIDGET_ID_FALLBACK;

  if (!secret) {
    return NextResponse.json(
      { error: "CONNECT_WIDGET_SECURITY_KEY is not set" },
      { status: 500 }
    );
  }

  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ typ: "JWT", alg: "HS256" }));
  const payload = base64url(
    JSON.stringify({
      sub: widgetId,
      iat: now,
      exp: now + TOKEN_TTL_SECONDS,
    })
  );
  const unsigned = `${header}.${payload}`;
  const signature = createHmac("sha256", secret).update(unsigned).digest("base64url");

  return NextResponse.json({ data: `${unsigned}.${signature}` });
}
