import Description from "./Description"
import Image from "./Image"
import TitleSection from "./TitleSection"
import WelcomeText from "./WelcomeText"

const SectionAbout = () => {
    return (
        <section className="py-15 lg:py-8 text-center lg:text-left">
            <TitleSection title="About me"/>
            <div className="flex flex-col lg:flex-row
                justify-center lg:justify-between items-center
                gap-4">
                <Image source="g.png" alternative="rawan"/>
                <div className="max-w-3xl">
                    <WelcomeText text="Hi there! i’m Rawan Barakat"/>
                    <Description text="I’m a Software Engineering and Information Systems
                        graduate from Latakia University, with a strong passion
                        for frontend development and website creation."/>
                    <Description text="I completed both my beginner
                        and advanced frontend training at Focal X ,
                        where I built responsive websites using HTML, CSS, JavaScript, 
                        and React (JSX and TSX) , working on practical and academic projects."/>
                    <Description text="I focus on writing clean, well-structured
                    code and building modern,responsive websites that perform efficiently across different
                    devices. I’m continuously improving my skills and keeping up with the latest web
                    technologies."/>
                </div>
            </div>
        </section>
    )
}

export default SectionAbout