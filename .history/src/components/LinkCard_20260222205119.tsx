import { Link } from 'react-router-dom'
import type { ImageProps } from '../interfaces'

const LinkCard = ({url,image}:{url:string,image:ImageProps}) => {
    return (
        <Link to={url}><img src={} alt="" /></Link>
    )
}

export default LinkCard