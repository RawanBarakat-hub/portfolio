import Image from "./Image"
import TitleSection from "./TitleSection"
import WelcomeText from "./WelcomeText"

const SectionAbout = () => {
    return (
        <section className="py-15 lg:py-8">
            <TitleSection title="About me"/>
            <div className="flex flex-col lg:flex-row
            justify-center lg:justify-between items-center
            gap-4">
                <Image source="/assets/images/photos/rawan.png" alternative="rawan"/>
                <div className="text-center lg:text-left max-w-3xl">
                    <WelcomeText text="Hi there! i’m Rawan Barakat"/>
                    <p className="text-white text-xl mt-5">
                        I’m a <span className="text-white font-bold">
                            Software Engineering and Information Systems </span>
                        graduate from Latakia University, with a strong passion
                        for frontend development and website creation.
                    </p>
                    <p  className="text-white text-xl mt-5">I completed both my beginner
                        and advanced frontend training at <span className="text-white font-bold">Focal X
                        </span> ,
                        where I built responsive websites using HTML, CSS, JavaScript, 
                        and <span className="text-white font-bold">React (JSX and TSX) </span>, working on practical and academic projects.
                    </p>
                    <p  className="text-white text-xl mt-5">I focus on writing clean, well-structured
                    code and building modern,responsive websites that perform efficiently across different
                    devices. I’m continuously improving my skills and keeping up with the latest web
                    technologies.</p>
                </div>
            </div>
        </section>
    )
}

export default SectionAbout