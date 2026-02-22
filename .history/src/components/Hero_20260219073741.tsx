import LinkBtn from "./LinkBtn"

const Hero = () => {
    return (
        <div className="h-screen pt-35 px-9">
            <div>
                <p className="text-pr">Hello, I'm</p>
                <h1>Rawan Mohammad Barakat</h1>
                <p>Frontend Developer crafting clean & responsive web experiences.</p>
                <div className="flex gap-4">
                    <LinkBtn url="" text="View my project"/>
                    <LinkBtn url="" text="Contact me"/>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Hero