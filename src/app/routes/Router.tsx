import {
    createBrowserRouter
} from "react-router-dom"
import Layout from "../shared/layout/Layout"
import Animation from "../pages/animation/Animation"
import Dashboard from "../pages/dashboard/Dashboard"

const AppRouter = createBrowserRouter([
    {
      path: "/dashboard",
      element: <Dashboard/>,
      children: [
        {
            path: "animations",
            element: <Layout children={<Animation/>}/>
        }
      ]
    }    
])

export default AppRouter