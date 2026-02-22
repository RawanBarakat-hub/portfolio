import type { TitleSectionProp } from "../interfaces"

const TitleSection = ({title}:TitleSectionProp) => {
    return (
        <h2 className="">{title}</h2>
    )
}

export default TitleSection