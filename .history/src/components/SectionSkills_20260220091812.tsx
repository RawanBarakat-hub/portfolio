import { skills } from "../data/data"
import LinkBtn from "./LinkBtn"
import TitleSection from "./TitleSection"

const SectionSkills = () => {
    return (
        <section>
            <TitleSection title="My Skills"/>
            {
                skills.map(())
            }
        </section>
    )
}

export default SectionSkills