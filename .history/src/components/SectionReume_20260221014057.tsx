import { certifications } from "../data/data"
import Description from "./Description"
import TitleSection from "./TitleSection"
import WelcomeText from "./WelcomeText"

const SectionReume = () => {
    return (
        <section className="py-15 lg:py-8">
            <TitleSection title="Resume"/>
            <div>
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
                <div>
                    <WelcomeText text=""
                </div>
            </div>
        </section>
    )
}

export default SectionReume