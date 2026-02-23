import Image from "./Image"
import LinkBtn from "./LinkBtn"
import WelcomeText from "./WelcomeText"

const Hero = () => {
    return (
        <div className="h-screen pt-35 lg:pt-25 flex flex-col lg:flex-row
        justify-center lg:justify-between items-center gap-5">
            <div className="text-center lg:text-left">
                <Image source="/assets/images/photos/rawan.png" alternative="rawan"/>
                <WelcomeText text="Hello, I’m"/>
                <h1 className="text-white text-3xl lg:text-5xl mt-3 lg:mt-4
                mb-4 lg:mb-6 font-bold">Rawan Mohammad Barakat</h1>
                <p className="text-primary-color text-2xl lg:text-4xl max-w-2xl
                mb-4 lg:mb-14">Frontend Developer crafting clean & responsive web experiences.</p>
                <div className="flex justify-center lg:justify-start gap-4">
                    <LinkBtn url="/#projects" text="View my project"/>
                    <LinkBtn url="/#contact" text="Contact me"/>
                </div>
            </div>
        </div>
    )
}

export default Hero