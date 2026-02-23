import type { LinkProps } from '../interfaces'

const Icon = ({url,text,image}:LinkProps) => {
    return (
        <a  target="_blank" className={`${text?"text-white bg-linear-to-r from-primary-color to-black font-medium  hover:scale-120":
                "bg-primary-color hover:bg-hover-color"}
                 text-xl text-background-color p-3.5 rounded-lg w-fit flex items-center `} href={url}> 
            <img src={image?.source} alt={image?.alternative} />
        </a>
        
    )
}

export default Icon