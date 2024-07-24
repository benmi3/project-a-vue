export async function make_login_request(content: String): Promise<Response> {
  return send_request("/api/login", JSON.stringify(content), content.length);
}

export async function make_logout_request(content: String): Promise<Response> {
  return send_request("/api/logout", JSON.stringify(content), content.length);
}
async function send_request(url: string, content: BodyInit, contentLength: Number): Promise<Response> {
  const reqHeaders = new Headers({
    "Content-Type": "application/json",
    "Content-Length": contentLength.toString(),
    "X-Custom-Header": "ProcessThisImmediately",
  });

  return fetch(url, {
    method: "POST",
    headers: reqHeaders,
    body: content,
  })
}

