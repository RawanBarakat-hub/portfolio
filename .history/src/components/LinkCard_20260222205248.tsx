import { Link} from 'react-router-dom'

const LinkCard = ({url,image}:LinkProps) => {
    return (
        <Link to={url}><img src={image.source} alt={image.alternative} /></Link>
    )
}

export default LinkCard