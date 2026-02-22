import type { ContainerProps } from "../interfaces"

const Container = ({children}:ContainerProps) => {
    return (
        <div className="flex jus">{children}</div>
    )
}

export default Container
