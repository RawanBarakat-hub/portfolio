import type { LinkProps } from '../interfaces'

const Icon = ({url,image}:LinkProps) => {
    return (
        <a className="w-7" href={url}> 
            <img  src={image?.source} alt={image?.alternative} />
        </a>
        
    )
}

export default Icon