import { Link } from 'react-router-dom'
import { type LinkProps } from '../interfaces'
import { HashLink } from 'react-router-hash-link'
const LinkBtn = ({url,text,image}:LinkProps) => {
    return (
            <HashLink className="bg-primary-color hover:bg-hover-color
            text-xl text-background-color p-3.5 rounded-lg w-fit flex items-center
            gap-4 transition-all`" to={url}>{text} 
            {image && <img className='w-10' src={image?.source} alt={image?.alternative} />}</Has>
    )
}

export default LinkBtn