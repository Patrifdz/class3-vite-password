 export type Security = "low" | "medium" | "high";

export interface Level  {
    regExp : RegExp,
    max: number,
    min: number
}

export interface Password {
    low : Level,
    medium: Level,
    high: Level
}