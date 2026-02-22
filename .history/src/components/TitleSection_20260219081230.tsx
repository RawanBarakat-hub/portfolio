import type { TitleSectionProp } from "../interfaces"

const TitleSection = ({title}:TitleSectionProp) => {
    return (
        <h2 className="text-xl lg:text-3xl text-primary-color
        mb-">{title}</h2>
    )
}

export default TitleSection