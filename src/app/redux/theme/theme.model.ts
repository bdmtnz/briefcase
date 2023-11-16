import { ENUMS } from "../../shared/models/enums"
import { darkCSSTheme } from "./darkTheme"
import { lightCSSTheme } from "./lightTheme"

export const CSS_THEMES: Record<string, Record<string, string>> = {
    dark: darkCSSTheme,
    light: lightCSSTheme
}

export const changeCSSTheme = (themeKey:'dark'|'light'|string) => {
    let theme = CSS_THEMES[themeKey]
    localStorage.setItem(ENUMS.LS.Theme, themeKey)
    for (const key in theme) {
        const element = theme[key];
        document.documentElement.style.setProperty(key, element)
    }
}

export const getCurrentTheme = () => {
    let themeJson = localStorage.getItem(ENUMS.LS.Theme)
    let theme = themeJson ? {...CSS_THEMES[themeJson]} : {...darkCSSTheme}
    return {
        themeKey: themeJson ?? 'dark',
        theme: theme
    }
}