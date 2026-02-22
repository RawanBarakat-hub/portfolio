import type { TitleSectionProp } from "../interfaces"

const TitleSection = ({title}:TitleSectionProp) => {
    return (
        <h2 className="text-">{title}</h2>
    )
}

export default TitleSection