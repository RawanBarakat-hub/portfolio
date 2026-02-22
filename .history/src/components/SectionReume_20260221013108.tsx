import { certifications } from "../data/data"
import TitleSection from "./TitleSection"
import WelcomeText from "./WelcomeText"

const SectionReume = () => {
    return (
        <section className="py-15 lg:py-8">
            <TitleSection title="Resume"/>
            <div>
                <WelcomeText text="Certifications & Experience" />
                <ul>
                    {
                        certifications.map((item,index)=>{
                            return
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default SectionReume