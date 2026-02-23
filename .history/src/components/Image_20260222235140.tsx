import type { ImageProps } from '../interfaces'

const Image = ({source,alternative}:ImageProps) => {
    return (
        <div className='w-60 lg:w-125 lg:h-125 rounded-full border-2 border-primary-color
            shadow-sm shadow-primary-color flex justify-center items-center overflow-hidden
            shrink-0'>
            <img src={source} alt={alternative} />
        </div>
    )
}

export default Image