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

export function nameToInitials(name: string) {
  const names = name.split(" ");
  const initials = names.map((n) => n[0].toUpperCase()).join("");

  return initials;
}

export function getInitialsColor(name: string) {
  // Randomize the color based on name hash
  const hash = name.split("").reduce((acc, char) => {
    acc = (acc << 5) - acc + char.charCodeAt(0);
    return acc & acc;
  }, 0);

  // Generate a random hue
  const hue = hash % 360;

  return `hsl(${hue}, 70%, 80%)`;
}
