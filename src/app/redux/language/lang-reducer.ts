import { ILangState } from "./lang-context";

export const LangActions = {
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE'
}

export const LangReducer = (state:ILangState, action:any) => {
  switch (action.type) {
    case LangActions.CHANGE_LANGUAGE:
      return {
          ...state,
          languageKey: action.languageKey,
          language: action.language
      };
    default:
      return state;
  }
};