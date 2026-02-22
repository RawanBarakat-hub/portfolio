
const WelcomeText = ({welcome}:{welcome:string}) => {
    return (
        <p className="text-primary-color text-xl lg:text-3xl
            font-medium">{welcome}
        </p>
    )
}

export default WelcomeText