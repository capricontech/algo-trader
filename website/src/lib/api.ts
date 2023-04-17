import { API_URL } from "./config";

export async function getHeaders(authenticated = false) {
  return {
    "Content-Type": "application/json",
  };
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
