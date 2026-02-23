import type { ImageProps } from '../interfaces'

const Image = ({source,alternative}:ImageProps) => {
    return (
        <div className='w- w-125 h-125 rounded-full border-2 border-primary-color
            shadow-sm shadow-primary-color flex justify-center items-center overflow-hidden
            shrink-0'>
            <img src={source} alt={alternative} />
        </div>
    )
}

export default Image