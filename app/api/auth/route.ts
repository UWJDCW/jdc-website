import { NextRequest, NextResponse } from "next/server";

// Step 1 of Decap CMS's GitHub login: send the editor to GitHub to approve
// access, with a random `state` we can check on the way back in /api/callback.
export async function GET(request: NextRequest) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  if (!clientId) {
    return new NextResponse("Missing OAUTH_GITHUB_CLIENT_ID environment variable", { status: 500 });
  }

  const state = crypto.randomUUID();
  const redirectUri = new URL("/api/callback", request.url).toString();

  const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("scope", "repo,user");
  authorizeUrl.searchParams.set("state", state);

  const response = NextResponse.redirect(authorizeUrl);
  response.cookies.set("decap_oauth_state", state, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 600,
    path: "/",
  });
  return response;
}
