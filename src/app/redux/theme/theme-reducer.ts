import { IThemeState } from "./theme-context";

export const ThemeActions = {
  CHANGE_THEME: 'CHANGE_THEME'
}

export const ThemeReducer = (state:IThemeState, action:any) => {
  switch (action.type) {
    case ThemeActions.CHANGE_THEME:
      return {
          ...state,
          themeKey: action.themeKey,
          theme: action.theme
      };
    default:
      return state;
  }
};