export function validateUsername(username: string): boolean {
  return isValidCredential(username) && username.length >= 5;
}

export function validatePassword(password: string): boolean {
  return isValidCredential(password) && password.length >= 10;
}

function isValidCredential(credential: string): boolean {
  const regex: RegExp = /^[a-zA-Z0-9!@#$%^&*]+$/;
  return regex.test(credential);
}

