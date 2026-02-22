import { certifications } from "../data/data"
import Description from "./Description"
import TitleSection from "./TitleSection"
import WelcomeText from "./WelcomeText"

const SectionReume = () => {
    return (
        <section className="py-15 lg:py-8">
            <TitleSection title="Resume"/>
            <div>
                <WelcomeText text="Certifications & Experience" />
                <ul className="mt-6 list-disc white">
                    {
                        certifications.map((item,index)=>{
                            return <li key={index}>
                                <Description text={item} />
                            </li>
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default SectionReume