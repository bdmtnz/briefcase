import { Container } from "@mui/material"
import "./Layout.scss"
import { useContext } from "react"
import { ThemeContext } from "../../redux/theme/theme-context"

interface LayoutParams {
    children: JSX.Element
}

const Layout = ({ children }: LayoutParams) => {
    const { theme } = useContext(ThemeContext)

    return (
        <Container maxWidth="lg" className={"root-layout "+ theme.bg.high}>
            {children}
        </Container>
    )
}

export default Layout