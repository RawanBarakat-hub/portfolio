import type { ContainerProps } from "../interfaces"

const Container = ({children}:ContainerProps) => {
    return (
        <div className="flex justify-between gap-">{children}</div>
    )
}

export default Container
