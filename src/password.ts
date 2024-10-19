import type {Security} from './password.model';
import {levelPassword, testPassword} from './password.aux';

const capitalAlphabet : string = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, Ñ, O, P, Q, R, S, T, U, V, W, X, Y, Z." // -> 27 letras, generar número aleatorio entre 0 - 26 
const minusAlphabet : string = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, ñ, o, p, q, r, s, t, u, v, w, x, y, z"; // -> 27 letras, generar número aleatorio entre 0 - 26 

const numbers : string = "0, 1, 2, 3, 4, 5, 6, 7, 8, 9" // -> 10 números, generar número aleatorio entre 0 - 9

const specialCharacters = " !, @, #, $, %, ^, &, * " // -> 8 caracteres, generar número entre 0 - 7 
export function getValidPassword ( regExOption : Security) : string {

    const level = levelPassword(regExOption);

    const passwordRandom = "";

    

    return "abc123"
}

