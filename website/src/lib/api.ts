import { API_URL } from "./config";

export async function getHeaders(authenticated = false) {
  let headers: any = {
    "Content-Type": "application/json",
  };
  if (authenticated) {
    const token = localStorage.getItem("token");
    if (token) {
      headers = {
        ...headers,
        Authorization: `Bearer ${token}`,
      };
    }
  }
  return headers;
}

export async function register(data: any) {
  const res = await fetch(`${API_URL}/api/auth/custom-register`, {
    method: "POST",
    headers: await getHeaders(),
    body: JSON.stringify({
      data: {
        ...data,
        username: data.email,
      },
    }),
  });
  const json = await res.json();
  if (!res.ok) throw Error(json.error.message);

  return json;
}

export async function login(email: string, password: string) {
  const res = await fetch(`${API_URL}/api/auth/local`, {
    method: "POST",
    headers: await getHeaders(),
    body: JSON.stringify({
      identifier: email,
      password,
    }),
  });
  const json = await res.json();
  if (!res.ok) throw Error(json.error.message);

  return json;
}

export async function getBalance() {
  const res = await fetch(`${API_URL}/api/balance`, {
    method: "GET",
    headers: await getHeaders(true),
  });
  const json = await res.json();
  if (!res.ok) throw Error(json.error.message);

  return json;
}

export async function getProfile() {
  return JSON.parse(localStorage.getItem("user") || "{}");
}

export async function getTree() {
  const res = await fetch(`${API_URL}/api/auth/tree`, {
    method: "GET",
    headers: await getHeaders(true),
  });
  const json = await res.json();
  if (!res.ok) throw Error(json.error.message);

  return json;
}

export async function logout() {
  localStorage.clear();
  window.location.href = "/";
}
