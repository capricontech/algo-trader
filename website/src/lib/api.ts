import { API_URL } from "./config";

export async function getHeaders(authenticated = false) {
  return {
    "Content-Type": "application/json",
  };
}

export async function register(data: any) {
  const res = await fetch(`${API_URL}/api/register`, {
    method: "POST",
    headers: await getHeaders(),
    body: JSON.stringify({
      ...data,
      username: data.email,
    }),
  });
  const json = await res.json();
  if (!res.ok) throw Error(json.message);

  return json;
}
