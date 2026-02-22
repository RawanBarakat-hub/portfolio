import { Link } from 'react-router-dom'
import { type LinkProps } from '../interfaces'
const LinkBtn = ({url,text,image}:LinkProps) => {
    return (
            <Link className={`${image?" bg-amber-500 hover:scale-130":
                "bg-primary-color hover:bg-hover-color"}
            text-background-color p-3.5 rounded-lg w-fit flex gap-4 transition-all`} to={url}>{text} 
            {image && <img src={image?.source} alt={image?.alternative} />}</Link>
    )
}

export default LinkBtn