import LinkBtn from "./LinkBtn"

const Hero = () => {
    return (
        <div className="h-screen pt-65 px-9 flex justify-between">
            <div>
                <p className="text-primary-color text-3xl
                font-medium">Hello, I'm</p>
                <h1 className="text-white text-5xl mt-4
                mb-6 font-bold">Rawan Mohammad Barakat</h1>
                <p className="text-primary-color text-4xl max-w-2xl
                mb-14">Frontend Developer crafting clean & responsive web experiences.</p>
                <div className="flex gap-4">
                    <LinkBtn url="" text="View my project"/>
                    <LinkBtn url="" text="Contact me"/>
                </div>
            </div>
            <div className="w-[500px] h-[500px] rounded-full border-2 border-primary-color
            shadow-sm shadow-primary-color">
                <img src="/assets/images/photos/rawan.jpg" alt="rawan photo" />
            </div>
        </div>
    )
}

export default Hero