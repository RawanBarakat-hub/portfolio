import type { LinkProps } from '../interfaces'

const Icon = ({url,text,image}:LinkProps) => {
    return (
        <a className={`target ${text?"text-white bg-linear-to-r from-primary-color to-black font-medium  hover:scale-120":
                "bg-primary-color hover:bg-hover-color"} `} href={url}> 
            <img src={image?.source} alt={image?.alternative} />
        </a>
        
    )
}

export default Icon