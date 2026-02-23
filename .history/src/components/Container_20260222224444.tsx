import type { ContainerProps } from "../interfaces"

const Container = ({children,className}:ContainerProps) => {
    return (
        <div className={`flexflex-wrap gap-4 ${className=="footer"?"justify-center":"justify-between"}`}>{children}</div>
    )
}

export default Container
