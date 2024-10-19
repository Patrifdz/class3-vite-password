import type { Password, Security } from "./password.model";

export const featurePassword : Password = {
  low: {
    regExp: /^[a-z0-9]{6,10}$/,
    max: 10,
    min: 6,
  },
  medium : {
    regExp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/,
    max: 12,
    min: 8
  },
  high: {
    regExp : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{12,16}$/,
    max: 16,
    min: 12,
    }
  }


export function levelPassword(level: Security): RegExp | string | undefined {
  if (level === "low") {
    return /^[a-z0-9]{6,10}$/;
  } else if (level === "medium") {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/;
  } else if (level === "high") {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{12,16}$/;
  } else {
    ("cannot get regular expression");
  }
}

export function testPassword(password: string, regEx: RegExp): boolean {
  return regEx.test(password);
}
