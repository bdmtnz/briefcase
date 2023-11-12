import { Outlet } from 'react-router-dom'
import './Dashboard.scss'
import NavBar from './components/navbar/Navbar'

const Dashboard = () => {
    return (
        <div id="root-dashboard">
            <NavBar/>
            <Outlet />
        </div>
    )
}

export default Dashboard