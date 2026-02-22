import { Link } from 'react-router-dom'
import { type LinkProps } from '../interfaces'
const LinkBtn = ({url,text}:LinkProps) => {
    return (
            <Link className='bg-primary-color hover:
            text-background-color p-3.5 rounded-xl' to={url}>{text}</Link>
    )
}

export default LinkBtn