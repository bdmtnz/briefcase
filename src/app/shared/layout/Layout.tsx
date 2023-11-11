import "./Layout.scss"

interface LayoutParams {
    children: JSX.Element
}

const Layout = ({ children }: LayoutParams) => {

    return (
        <>{children}</>
    )
}