import { useContext } from 'react'
import './Transition.scss'
import { ThemeContext } from '../../../redux/theme/theme-context'

const Transition = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <div id="root-transition">
            <button className={theme.btn.high}>
                Hover me
            </button>
        </div>
    )
}

export default Transition