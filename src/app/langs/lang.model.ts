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
    },
    Shared: {
        Components: {
            Select: {
                Choose: string
            }
        }
    }
}

export const LANGS: Record<string, ILang> = {
    esCO: esCO,
    enUS: enUS
}