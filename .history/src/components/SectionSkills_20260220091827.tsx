import { skills } from "../data/data"
import LinkBtn from "./LinkBtn"
import TitleSection from "./TitleSection"

const SectionSkills = () => {
    return (
        <section>
            <TitleSection title="My Skills"/>
            {
                skills.map((skill,index)=>{
                    return <LinkBtn 
                })
            }
        </section>
    )
}

export default SectionSkills