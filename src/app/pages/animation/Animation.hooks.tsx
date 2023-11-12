import { useContext, useEffect, useState } from "react"
import { ITabsParam } from "../../shared/components/tabs/Tabs.model"
import { LangContext } from "../../redux/language/lang-context";
import Transition from "./transition/Transition";


export const useAnimation = () => {
    const {
      language
    } = useContext(LangContext);
    
    const [tabs, setTabs] = useState<ITabsParam>({
        defaultTab: 0,
        tabs: [
            {
                label: language.Pages.Animation.Labels.Transitions,
                value: 0,
                element: <Transition/>
            },
            {
                label: language.Pages.Animation.Labels.Transforms,
                value: 1,
                element: <div>Lol 2</div>
            },
        ]
    })

    useEffect(() => {
        setTabs({
            defaultTab: 0,
            tabs: [
                {
                    label: language.Pages.Animation.Labels.Transitions,
                    value: 0,
                    element: <Transition/>
                },
                {
                    label: language.Pages.Animation.Labels.Transforms,
                    value: 1,
                    element: <div>Lol 2</div>
                },
            ]
        })
    }, [language])

    return {
        state: {
            tabs
        },
        actions: {
            setTabs
        }
    }
}