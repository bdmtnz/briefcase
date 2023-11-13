import { darkTheme } from "./darkTheme"
import { lightTheme } from "./lightTheme"

export interface ITheme {
    bg: {
        low: string,
        middle: string,
        high: string
    },
    btn: {
        high: string
    }
}

export const THEMES: Record<string, ITheme> = {
    dark: darkTheme,
    light: lightTheme
}