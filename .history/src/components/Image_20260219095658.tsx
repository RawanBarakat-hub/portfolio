import type { ImageProps } from '../interfaces'

const Image = ({source,alternative}:ImageProps) => {
    return (
        <div >
            <img src={source} alt={alternative} />
        </div>
    )
}

export default Image