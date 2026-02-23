import { Link } from 'react-router-dom'
import { type LinkProps } from '../interfaces'
const LinkBtn = ({url,text,image}:LinkProps) => {
    return (
            <Link className=
                bg-primary-color hover:bg-hover-color
            text-xl text-background-color p-3.5 rounded-lg w-fit flex items-center
            gap-4 transition-all`} to={url}>{text} 
            {image && <img className='w-10' src={image?.source} alt={image?.alternative} />}</Link>
    )
}

export default LinkBtn