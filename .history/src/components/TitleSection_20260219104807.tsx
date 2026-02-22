import type { TitleSectionProp } from "../interfaces"

const TitleSection = ({title}:TitleSectionProp) => {
    return (
        <h2 className="text-xl lg:text-4xl text-primary-color font-semibold
        mb-4 lg:mb-">{title}</h2>
    )
}

export default TitleSection