import { Link } from "react-router-dom"
import type { CardProps } from "../interfaces"

const Card = ({image,title,text,code,deploy}:CardProps) => {
    return (
        <div className=" rounded-xl">
            <div>
                <div c>
                    <img className="w-full h-full" src={image.source} alt={image.alternative} />
                </div>
                <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
            <div className="flex justify-between gap-2">
                <Link to={deploy}><img src="/assets/images/icons/arrow.svg" alt="arrow icon" /></Link>
                <Link to={code}><img src="/assets/images/icons/github.svg" alt="github icon" /></Link>
            </div>
        </div>
    )
}

export default Card