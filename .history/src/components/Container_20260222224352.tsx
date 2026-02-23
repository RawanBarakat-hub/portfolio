import type { ContainerProps } from "../interfaces"

const Container = ({children,className}:ContainerProps) => {
    return (
        <div className="flex justify-between flex-wrap gap-4">{children}</div>
    )
}

export default Container
