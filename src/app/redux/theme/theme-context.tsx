import React, { useReducer } from "react";
import { ThemeActions, ThemeReducer } from "./theme-reducer";
import { ITheme, THEMES } from "./models/theme.model";
import { darkTheme } from "./models/darkTheme";

export interface IThemeState {
    themeKey: 'dark'|'light',
    theme: ITheme,
    setTheme: (themeKey:'dark'|'light'|string) => void
}

export const initialState: IThemeState = {
    themeKey: "dark",
    theme: darkTheme,
    setTheme: (themeKey:'dark'|'light'|string) => { console.log(themeKey) }
}

export const ThemeContext = React.createContext(initialState)

export const ThemeProvider = ({ children }: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(ThemeReducer, initialState)

    const value: IThemeState = {
        themeKey: state.themeKey,
        theme: state.theme,
        setTheme: (themeKey:string) => {
            let _theme = THEMES[themeKey] ?? darkTheme;
            console.log(_theme)
            dispatch({ type: ThemeActions.CHANGE_THEME, themeKey: themeKey, theme: _theme });
        }
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
