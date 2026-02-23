import type { LinkProps } from '../interfaces'

const Icon = ({url,text,image}:LinkProps) => {
    return (
        <a  target="_blank" className={`${text?"bg-linear-to-r from-primary-color to-black font-medium text-xl text-white p-3.5 rounded-lg w-fit flex items-center gap-4 hover:scale-120":
                ""} transition-all`} href={url}>{text&&
                <span>{text}</span>} 
            <img className='w-7' src={image?.source} alt={image?.alternative} />
        </a>
        
    )
}

export default Icon