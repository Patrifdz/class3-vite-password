 export type Security = "low" | "medium" | "high";

export interface Level  {
    regExp : RegExp,
    max: number,
    min: number,
    characters: string
}

export interface Password {
    low : Level,
    medium: Level,
    high: Level
}