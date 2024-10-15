import { expect, test, describe } from "vitest";
import { levelPassword, testPassword } from "./password.aux";
import { Security } from "./password.model";


describe("Testing function 'levelPassword' ", () => {
  test("Testing receiving 'low' and getting valid regExp", () => {
    // Arrange -> Definir los datos que usaremos para la prueba
    const level : Security = "low";
    // Act -> Ejecutas la acción que quieres probar, por ejemplo, ejecutas la función
    const result : RegExp | string | undefined = levelPassword(level);
    // Assert -> Compruebas que el resultado es el esperado
    expect(result).toStrictEqual(/^[a-z0-9]{6,10}$/);
  });
});

describe('Testing function "testPassword"', () => {
  test("Testing receiving password and regExp and return true or false", () => {
    // Arrange -> Definir los datos que usaremos para la prueba
    const password  = {
      "true" : "abc123",
      "false" : "aBc123"
    }
    const level : RegExp | string | undefined = /^[a-z0-9]{6,10}$/;

    // Act -> Ejecutas la acción que quieres probar, por ejemplo, ejecutas la función
    const result = {
      "true": testPassword (password.true, level),
      "false":  testPassword (password.false, level)
    }

    // Assert -> Compruebas que el resultado es el esperado
    expect(result.true).toBe(true);
    expect(result.false).toBe(false);
  });
});
