import LinkBtn from "./LinkBtn"

const Hero = () => {
    return (
        <div className="h-screen lg:pt-25 px-9 flex flex-col lg:flex-row
        justify-center lg:justify-between items-center gap-5">
            <div className="text-center lg:text-left">
                <p className="text-primary-color text-3xl
                font-medium">Hello, I'm</p>
                <h1 className="text-white text-5xl mt-4
                mb-6 font-bold">Rawan Mohammad Barakat</h1>
                <p className="text-primary-color text-4xl max-w-2xl
                mb-14">Frontend Developer crafting clean & responsive web experiences.</p>
                <div className="flex justify-center lg:justify-start gap-4">
                    <LinkBtn url="" text="View my project"/>
                    <LinkBtn url="" text="Contact me"/>
                </div>
            </div>
            <div className="w-125 h-125 rounded-full border-2 border-primary-color
            shadow-sm shadow-primary-color flex justify-center items-center overflow-hidden
            shrink-0">
                <img src="/assets/images/photos/rawan.png" alt="rawan photo" />
            </div>
        </div>
    )
}

export default Hero