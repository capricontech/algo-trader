export function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function isValidEmail(email: string) {
  if (!email) return false;
  return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
}
