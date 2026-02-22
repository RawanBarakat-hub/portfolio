import { Link } from "react-router-dom"
import type { CardProps } from "../interfaces"

const Card = ({image,title,text,code,deploy}:CardProps) => {
    return (
        <div>
            <div>
                <img src={image.source} alt={image.alternative} />
                <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
            <div className="flex justify-between gap-">
                <Link to={deploy}><img src="/assets/images/icons/arrow.svg" alt="arrow icon" /></Link>
                <Link to={code}><img src="/assets/images/icons/github.svg" alt="github icon" /></Link>
            </div>
        </div>
    )
}

export default Card