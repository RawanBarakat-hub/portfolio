import { Link } from "react-router-dom"
import type { CardProps } from "../interfaces"

const Card = ({image,title,text,code,deploy}:CardProps) => {
    return (
        <div>
            <div>
                <img src={image.source} alt={image.alternative} />
                <div>
                    <h3>{</h3>
                </div>
            </div>
            <div>
                <Link to={deploy}><img src="/assets/images/icons/arrow.svg" alt="" /></Link>
                <Link to={code}><img src="/assets/images/icons/github.svg" alt="" /></Link>
            </div>
        </div>
    )
}

export default Card