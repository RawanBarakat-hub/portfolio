import { Link } from 'react-router-dom'
import type { LinkProps } from '../interfaces'

const Icon = ({url,image}:LinkProps) => {
    return (
        <Link className="w-7 group" to={url}>
            <img className='transition duration-300 group-hover:brightness-0 group-hover:invert' src={image?.source} alt={image?.alternative} /></Link>
    )
}

export default Icon