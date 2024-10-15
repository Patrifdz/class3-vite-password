import type {Security} from './password.model';
import {levelPassword} from './password.aux';

export function getValidPassword ( regExOption : Security) : string {

    const level = levelPassword(regExOption);

    return "abc123"
}

