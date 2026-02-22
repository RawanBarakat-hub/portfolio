import type { TitleSectionProp } from "../interfaces"

const TitleSection = ({title}:TitleSectionProp) => {
    return (
        <h2 className="text-xl lg:text-3xl text-primary-color font
        mb-4 lg:mb-6">{title}</h2>
    )
}

export default TitleSection