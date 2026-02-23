import { Link } from 'react-router-dom'
import type { LinkProps } from '../interfaces'

const Icon = ({url,image}:LinkProps) => {
    return (
        <a className="w-7" href={url}> 
            <img className='transition duration-300' src={image?.source} alt={image?.alternative} />
        </a>
        
    )
}

export default Icon