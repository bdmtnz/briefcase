import {
    createBrowserRouter
} from "react-router-dom"
import Transition from "../pages/animation/transition/Transition"

const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>
    },
    {
        path: "/transition",
        element: <Transition/>
    },
])

export default AppRouter