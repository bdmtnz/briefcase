import { enUS } from "./enUS"
import { esCO } from "./esCO"

export interface ILang {
    Pages: {
        Animation: {
            Labels: {
                Transitions: string,
                Transforms: string
            }
        }
    }
}

export const LANGS: Record<string, ILang> = {
    esCO: esCO,
    enUS: enUS
}