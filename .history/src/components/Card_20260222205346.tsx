import { Link } from "react-router-dom"
import type { CardProps } from "../interfaces"

const Card = ({image,title,text,code,deploy}:CardProps) => {
    return (
        <div className="w-100 rounded-lg overflow-hidden group">
            <div className="relative">
                <img className="w-full h-full" src={image.source} alt={image.alternative} />
                <div className="absolute -top-full group-hover:top-0 text-center
                w-full h-full bg-[#00000088] transition-all flex flex-col 
                justify-center items-center">
                    <h3 className="text-white font-medium text-xl">{title}</h3>
                    <p className="text-white text-[18px]">{text}</p>
                </div>
            </div>
            <div className="flex justify-between gap-2 bg-black p-3.5">
                <
                <Link to={deploy}><img className="w-8"
                src="" alt="arrow icon" /></Link>
                <Link to={code}><img className="w-8" src="/assets/images/icons/github.svg" alt="github icon" /></Link>
            </div>
        </div>
    )
}

export default Card