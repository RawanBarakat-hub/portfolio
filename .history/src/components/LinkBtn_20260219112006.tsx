import { Link } from 'react-router-dom'
import { type LinkProps } from '../interfaces'
const LinkBtn = ({url,text,image}:LinkProps) => {
    return (
            <Link className= to={url}>{text} 
            <img src={image?.source} alt={image?.alternative} /></Link>
    )
}

export default LinkBtn