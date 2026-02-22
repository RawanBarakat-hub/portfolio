import { Link } from 'react-router-dom'
import { type LinkProps } from '../interfaces'
const LinkBtn = ({url,text}:LinkProps) => {
    return (
            <Link class to={url}>{text}</Link>
    )
}

export default LinkBtn