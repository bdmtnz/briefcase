import {
    createBrowserRouter
} from "react-router-dom"
import Layout from "../shared/layout/Layout"
import Animation from "../pages/animation/Animation"

const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>
    },
    {
        path: "/animations",
        element: <Layout children={<Animation/>}/>
    }
])

export default AppRouter