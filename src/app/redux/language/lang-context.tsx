import React, { useReducer } from "react";
import { LangActions, LangReducer } from "./lang-reducer";
import { ILang, LANGS } from "../../langs/lang.model";
import { esCO } from "../../langs/esCO";

export interface ILangState {
    languageKey: 'esCO'|'enUS',
    language: ILang,
    setLanguage: (languageKey:'esCO'|'enUS') => void
}

export const initialState: ILangState = {
    languageKey: "esCO",
    language: esCO,
    setLanguage: (languageKey:'esCO'|'enUS') => {}
}

export const LangContext = React.createContext(initialState)

export const LangProvider = ({ children }: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(LangReducer, initialState)

    const value: ILangState = {
        languageKey: state.languageKey,
        language: state.language,
        setLanguage: (langKey:string) => {
            let _language = LANGS[langKey] ?? esCO;
            dispatch({ type: LangActions.CHANGE_LANGUAGE, languageKey: langKey, language: _language });
        }
    }

    return (
        <LangContext.Provider value={value}>
            {children}
        </LangContext.Provider>
    )
}
