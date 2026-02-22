import { Link, type LinkProps } from 'react-router-dom'

const LinkBtn = ({url,text}:LinkProps) => {
    return (
        <div>
            <Link to={url}>{text}</Link>
        </div>
    )
}

export default LinkBtn