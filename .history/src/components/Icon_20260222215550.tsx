import type { LinkProps } from '../interfaces'

const Icon = ({url,image}:LinkProps) => {
    return (
        <a className="" href={url}> 
            <img className='hover:bg-hover-color' src={image?.source} alt={image?.alternative} />
        </a>
        
    )
}

export default Icon