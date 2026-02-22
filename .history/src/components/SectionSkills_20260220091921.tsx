import { skills } from "../data/data"
import Container from "./Container"
import LinkBtn from "./LinkBtn"
import TitleSection from "./TitleSection"

const SectionSkills = () => {
    return (
        <section>
            <TitleSection title="My Skills"/>
            <Container>
                {
                    skills.map((skill,index)=>{
                        return <LinkBtn key={index} url={skill.link.url}
                        />
                    })
            }
            </Container>
        </section>
    )
}

export default SectionSkills