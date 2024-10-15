import { expect, test, describe } from "vitest";
import { getValidPassword } from './password'

describe("Testing function 'getValidPassword' ", () => {
  test("Testing easy level password generate by the function 'getValidPassword' ", () => {
    // Arrange -> Definir los datos que usaremos para la prueba
    const  levelPassword = "low";
    // Act -> Ejecutas la acción que quieres probar, por ejemplo, ejecutas la función
    const result =getValidPassword(levelPassword);
    // Assert -> Compruebas que el resultado es el esperado
    expect(result).toBe("abc123");
  });
});
