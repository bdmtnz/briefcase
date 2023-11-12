import {
    createBrowserRouter
} from "react-router-dom"
import Transition from "../pages/animation/transition/Transition"
import Layout from "../shared/layout/Layout"

const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>
    },
    {
        path: "/transition",
        element: <Layout children={<Transition/>}/>
    }
])

export default AppRouter