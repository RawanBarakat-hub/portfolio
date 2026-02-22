import { Link } from "react-router-dom"
import type { CardProps } from "../interfaces"

const Card = ({image,title,text,code,deploy}:CardProps) => {
    return (
        <div className="w-100 rounded-lg overflow-hidden">
            <div className="relative">
                <img className="w-full h-full" src={image.source} alt={image.alternative} />
                <div className="absolute top-1/2 left-1/2 translate
                w-full h-full bg-[#00000062]">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
            <div className="flex justify-between gap-2">
                <Link to={deploy}><img className="w-[50px]" src="/assets/images/icons/arrow.svg" alt="arrow icon" /></Link>
                <Link to={code}><img className="w-[50px]" src="/assets/images/icons/github.svg" alt="github icon" /></Link>
            </div>
        </div>
    )
}

export default Card