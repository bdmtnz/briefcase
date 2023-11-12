import TabsCustom from '../../shared/components/tabs/Tabs'
import { useAnimation } from './Animation.hooks'
import './Animation.scss'

const Animation = () => {

    const { state, actions } = useAnimation()

    return (
        <div className='root-animation'>
            <TabsCustom {...state.tabs}/>
        </div>
    )
}

export default Animation