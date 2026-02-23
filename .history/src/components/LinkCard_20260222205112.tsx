import { Link } from 'react-router-dom'
import type { ImageProps } from '../interfaces'

const LinkCard = ({url,image}:{url:string,image:ImageProps}) => {
    return (
        <Link to={url}>LinkCard</Link>
    )
}

export default LinkCard