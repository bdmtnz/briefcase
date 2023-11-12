interface ITab {
    label: string,
    value: number,
    element: JSX.Element
}

export interface ITabsParam {
    defaultTab: number,
    tabs: ITab[]
}

export const TabsParamsInitial: ITabsParam = {
    defaultTab: 0,
    tabs: []
}