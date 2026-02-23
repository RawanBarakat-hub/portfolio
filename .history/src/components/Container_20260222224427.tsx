import type { ContainerProps } from "../interfaces"

const Container = ({children,className}:ContainerProps) => {
    return (
        <div className={`${className=="footer"?"just"}`}>{children}</div>
    )
}

export default Container
