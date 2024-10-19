import type {Security} from './password.model';
import { typePassword, testPassword } from './password.aux';

const charactersLowPW = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, ñ, o, p, q, r, s, t, u, v, w, x, y, z, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9"; // -> 37 caracteres, solo minúsculas y números

const charactersMediumPW = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, ñ, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, Ñ, O, P, Q, R, S, T, U, V, W, X, Y, Z, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9";  // -> 64 caracteres, minúsculas, mayúsculas y números

const charactersHighPW = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, ñ, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, Ñ, O, P, Q, R, S, T, U, V, W, X, Y, Z, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, !, @, #, $, %, ^, &, *"; // -> 72 caracteres, minúsculas, mayúsculas, números y especiales


export function getValidPassword ( regExOption : Security, min : number, max: number) : string {

    const position 

    return "abc123"
}

