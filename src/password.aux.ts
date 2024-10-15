import type { Security} from './password.model'

export function levelPassword (level : Security) : RegExp  {
    if (level === "low") {
        return  /^[a-z0-9]{6,10}$/;
    } else if (level === "medium") {
        return  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/;
    } else if (level === "high") {
        return  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{12,16}$/;
    }  else { "cannot get regular expression";}
}

export function testPassword (password : string, regEx : RegExp ) : boolean  {
    return  regEx.test(password)
    }

