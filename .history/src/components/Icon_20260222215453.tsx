import { Link } from 'react-router-dom'
import type { LinkProps } from '../interfaces'

const Icon = ({url,image}:LinkProps) => {
    return (
        /* < className="w-7" to={url}>
           
        </> */
        <a href={url}></a>
        
    )
}

export default Icon