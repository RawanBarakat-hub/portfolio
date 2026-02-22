import { Link } from 'react-router-dom'
import { type LinkProps } from '../interfaces'
const LinkBtn = ({url,text,image}:LinkProps) => {
    return (
            <Link className={`${image?}
            text-background-color p-3.5 rounded-lg`} to={url}>{text} 
            <img src={image?.source} alt={image?.alternative} /></Link>
    )
}

export default LinkBtn