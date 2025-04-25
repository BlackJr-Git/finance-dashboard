import { JWT } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

function logoutParams(token: JWT): Record<string, string> {
  return {
    id_token_hint:
      typeof token.idToken === "string"
        ? token.idToken
        : String(token.idToken || ""),
    post_logout_redirect_uri:
      typeof process.env.NEXTAUTH_URL === "string"
        ? process.env.NEXTAUTH_URL
        : String(process.env.NEXTAUTH_URL || ""),
  };
}

function handleEmptyToken() {
  const response = { error: "No session present" };
  const responseHeaders = { status: 400 };
  return NextResponse.json(response, responseHeaders);
}

function sendEndSessionEndpointToURL(token: JWT) {
  const endSessionEndPoint = new URL(
    `${process.env.NEXT_PUBLIC_KEYCLOAK_ISSUER}/protocol/openid-connect/logout`
  );
  const params: Record<string, string> = logoutParams(token);
  const endSessionParams = new URLSearchParams(params);
  const response = { url: `${endSessionEndPoint.href}/?${endSessionParams}` };
  return NextResponse.json(response);
}

export async function GET(req: NextRequest) {
  try {
    const token = await getToken({ req });
    if (token) {
      return sendEndSessionEndpointToURL(token);
    }
    return handleEmptyToken();
  } catch (error) {
    console.error(error);
    const response = {
      error: "Unable to logout from the session",
    };
    const responseHeaders = {
      status: 500,
    };
    return NextResponse.json(response, responseHeaders);
  }
}