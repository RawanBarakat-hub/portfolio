import { type LinkProps } from '../interfaces'
import { HashLink } from 'react-router-hash-link'
const LinkBtn = ({url,text}:LinkProps) => {
    return (
            <HashLink className="bg-primary-color hover:bg-hover-color س
            text-[16px] lg:text-xl text-background-color p-2 lg:p-3.5 rounded-lg w-fit 
            transition-all`" to={url}>{text} </HashLink>
    )
}

export default LinkBtn