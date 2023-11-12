import { Container } from "@mui/material"
import "./Layout.scss"

interface LayoutParams {
    children: JSX.Element
}

const Layout = ({ children }: LayoutParams) => {

    return (
        <Container maxWidth="lg" className="root-layout">
            {children}
        </Container>
    )
}

export default Layout