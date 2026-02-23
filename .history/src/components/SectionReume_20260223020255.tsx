import { certifications } from "../data/data"
import Description from "./Description"
import TitleSection from "./TitleSection"
import WelcomeText from "./WelcomeText"

const SectionReume = () => {
    return (
        <section id="resume" className="py-15 lg:py-8">
            <TitleSection title="Resume"/>
            <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                <div>
                    <WelcomeText text="Certifications & Experience" />
                    <ul className="mt-0 list-disc text-white pl-7">
                        {
                            certifications.map((item,index)=>{
                                return <li key={index}>
                                    <Description text={item} />
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="text-center">
                    <Description 
                    text="Interested in working together? Download my CV to see my full experience" />
                    <a href="/Rawan Barakat CV.pdf" download 
                        className="inline-block p-3 rounded-md bg-primary-color hover:bg-hover-color
                        text-white text-[18px] font-medium mt-3 cursor-pointer"
                        >Download CV</a>
                </div>
            </div>
        </section>
    )
}

export default SectionReume