import { Link } from 'react-router-dom'
import type { ImageProps } from '../interfaces'

const LinkCard = ({url,image}:Link) => {
    return (
        <Link to={url}><img src={image.source} alt={image.alternative} /></Link>
    )
}

export default LinkCard