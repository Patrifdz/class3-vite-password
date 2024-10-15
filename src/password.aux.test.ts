import { expect, test, describe } from "vitest";
import { levelPassword } from "./password.aux";
import { Security } from "./password.model";


describe("Testing function 'levelPassword' ", () => {
  test("Testing receiving 'low' and getting valid regExp", () => {
    // Arrange -> Definir los datos que usaremos para la prueba
    const level : Security = "low";
    // Act -> Ejecutas la acción que quieres probar, por ejemplo, ejecutas la función
    const result : RegExp= levelPassword(level);
    // Assert -> Compruebas que el resultado es el esperado
    expect(result).toStrictEqual(/^[a-z0-9]{6,10}$/);
  });
});

describe('Testing function "testPassword"', () => {
  test("Testing receiving password and regExp and return true or false", () => {
    // Arrange -> Definir los datos que usaremos para la prueba
    const password : string = "Mn02KO";


    // Act -> Ejecutas la acción que quieres probar, por ejemplo, ejecutas la función
    const result = functionName(input);

    // Assert -> Compruebas que el resultado es el esperado
    expect(result).toBe(expectedValue);
  });
});
