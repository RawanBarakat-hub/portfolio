import type { ContainerProps } from "../interfaces"

const Container = ({children,className}:ContainerProps) => {
    return (
        <div className={`${className=="footer"?"justify-center":"ju"}`}>{children}</div>
    )
}

export default Container
