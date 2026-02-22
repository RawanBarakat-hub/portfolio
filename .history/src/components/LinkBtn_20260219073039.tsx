import { Link } from 'react-router-dom'
import { type LinkProps } from '../interfaces'
const LinkBtn = ({url,text}:LinkProps) => {
    return (
            <Link className='bg-primary-color
            text-b' to={url}>{text}</Link>
    )
}

export default LinkBtn