import { decode } from "jsonwebtoken";
export function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function isValidEmail(email: string) {
  if (!email) return false;
  return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
}

export function isValidToken(): boolean {
  const token = localStorage.getItem("token");
  if (!token) return false;

  const decodedToken: any = decode(token);
  const expiresAt = decodedToken.exp * 1000;

  return Date.now() < expiresAt;
}

export function getAuthToken(): string | null {
  if (!isValidToken()) return null;
  return localStorage.getItem("token");
}
