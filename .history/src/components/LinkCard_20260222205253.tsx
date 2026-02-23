import { Link } from 'react-router-dom'
import type { LinkProps } from '../interfaces'

const LinkCard = ({url,image}:LinkProps) => {
    return (
        <Link to={url}><img src={image.source} alt={image.alternative} /></Link>
    )
}

export default LinkCard