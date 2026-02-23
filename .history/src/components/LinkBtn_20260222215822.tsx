import { Link } from 'react-router-dom'
import { type LinkProps } from '../interfaces'
const LinkBtn = ({url,text,image}:LinkProps) => {
    return (
            <Link className={`${image?"text-white bg-linear-to-r from-primary-color to-black font-medium  hover:scale-120":
                ""} 
            text-xl text-background-color p-3.5 rounded-lg w-fit flex items-center
            gap-4 transition-all`} to={url}>{text} 
            {image && <img className='w-10' src={image?.source} alt={image?.alternative} />}</Link>
    )
}

export default LinkBtn