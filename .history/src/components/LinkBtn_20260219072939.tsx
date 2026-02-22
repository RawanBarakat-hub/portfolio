import { Link, type LinkProps } from 'react-router-dom'
import { type LinkProps } from '../interfaces'
const LinkBtn = ({url,text}:LinkProps) => {
    return (
        <div>
            <Link to={url}>{text}</Link>
        </div>
    )
}

export default LinkBtn