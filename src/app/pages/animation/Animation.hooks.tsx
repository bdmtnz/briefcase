import { useState } from "react"
import { ITabsParam } from "../../shared/components/tabs/Tabs.model"


export const useAnimation = () => {
    const [tabs, setTabs] = useState<ITabsParam>({
        defaultTab: 0,
        tabs: [
            {
                label: 'Transitions',
                value: 0,
                element: <div>Lol</div>
            },
            {
                label: 'Transforms',
                value: 1,
                element: <div>Lol 2</div>
            },
        ]
    })

    return {
        state: {
            tabs
        },
        actions: {
            setTabs
        }
    }
}