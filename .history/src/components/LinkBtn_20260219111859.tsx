import { Link } from 'react-router-dom'
import { type LinkProps } from '../interfaces'
const LinkBtn = ({url,text,}:LinkProps) => {
    return (
            <Link className='bg-primary-color hover:bg-hover-color
            text-background-color p-3.5 rounded-lg' to={url}>{text}</Link>
    )
}

export default LinkBtn