export const CURRENT_ENV =
  process.env.NODE_ENV === "production" ? "PROD" : "PROD";
export const API_URL =
  CURRENT_ENV === "PROD"
    ? "https://stakingapi.triunits.com"
    : "http://localhost:1337";
