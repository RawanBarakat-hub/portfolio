import type { ContainerProps } from "../interfaces"

const Container = ({children,className}:ContainerProps) => {
    return (
        <div className={`flex flex-wrap gap-6 ${className=="footer"?"justify-center":"justify- lg:justify-between"}`}>{children}</div>
    )
}

export default Container
