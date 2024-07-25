interface loginPackage {
  username: String,
  pwd: String,
}

export async function make_login_request(username: String, pwd: String): Promise<Response> {
  const loginpackage: loginPackage = {
    username: username,
    pwd: pwd,
  }
  const reqHeaders = new Headers({
    "Content-Type": "application/json",
    "X-Custom-Header": "ProcessThisImmediately",
  });

  return fetch("http://127.0.0.1:8080/api/login", {
    method: "POST",
    headers: reqHeaders,
    body: JSON.stringify(loginpackage),
  })
}

export async function make_logout_request(content: BodyInit): Promise<Response> {
  return send_request("/api/logout", content, 55);

}

async function send_request(url: string, content: BodyInit, contentLength: Number): Promise<Response> {
  const reqHeaders = new Headers({
    "Content-Type": "application/json",
    "Content-Length": contentLength.toString(),
    "X-Custom-Header": "ProcessThisImmediately",
  });

  console.log(content)
  return fetch(url, {
    method: "POST",
    headers: reqHeaders,
    body: content,
  })
}

