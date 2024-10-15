import { expect, test, describe } from "vitest";
import { getPassword } from './password'

describe("Testing function getPassword", () => {
  test("Testing easy level password generate by the function 'getPassword' ", () => {
    // Arrange -> Definir los datos que usaremos para la prueba
    const  levelPassword = "low";

    // Act -> Ejecutas la acción que quieres probar, por ejemplo, ejecutas la función
    const result =getPassword(levelPassword);

    // Assert -> Compruebas que el resultado es el esperado

    expect(result).toBe("HmJ10");
  });
});
