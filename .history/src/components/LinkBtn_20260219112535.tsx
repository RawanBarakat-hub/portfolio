import { Link } from 'react-router-dom'
import { type LinkProps } from '../interfaces'
const LinkBtn = ({url,text,image}:LinkProps) => {
    return (
            <Link className={`${image?"bg-linear-300 bg-linear-to-br bg-amber-500":"bg-primary-color hover:bg-hover-color"}
            text-background-color p-3.5 rounded-lg flex gap-4`} to={url}>{text} 
            <img src={image?.source} alt={image?.alternative} /></Link>
    )
}

export default LinkBtn