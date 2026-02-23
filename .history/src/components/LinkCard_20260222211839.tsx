import { Link } from 'react-router-dom'
import type { LinkProps } from '../interfaces'

const LinkCard = ({url,image}:LinkProps) => {
    return (
        <Link className="max-w-7 w-fit" to={url}><img className='hover:text-amber-300'
        src={image?.source} alt={image?.alternative} /></Link>
    )
}

export default LinkCard