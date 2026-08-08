import { NextRequest, NextResponse } from "next/server";

// Step 2: GitHub sends the editor back here with a one-time `code`. We
// exchange it server-side for an access token (needs the client secret,
// which is why this can't happen in the browser) and hand the token to the
// Decap CMS popup via the postMessage handshake it expects.
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const expectedState = request.cookies.get("decap_oauth_state")?.value;

  if (!code || !state || state !== expectedState) {
    return new NextResponse("Invalid or expired login attempt — please try again.", { status: 400 });
  }

  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return new NextResponse("Missing GitHub OAuth app credentials", { status: 500 });
  }

  const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
  });
  const tokenData = await tokenResponse.json();

  if (!tokenData.access_token) {
    return new NextResponse(`GitHub login failed: ${tokenData.error_description ?? "unknown error"}`, {
      status: 401,
    });
  }

  const message = `authorization:github:success:${JSON.stringify({
    token: tokenData.access_token,
    provider: "github",
  })}`;

  const html = `<!DOCTYPE html>
<html>
  <body>
    <script>
      (function () {
        function receiveMessage(e) {
          window.opener.postMessage(${JSON.stringify(message)}, e.origin);
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      })();
    </script>
  </body>
</html>`;

  const response = new NextResponse(html, { headers: { "Content-Type": "text/html" } });
  response.cookies.delete("decap_oauth_state");
  return response;
}
