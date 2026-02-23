import { skills } from "../data/data"
import Container from "./Container"
import Icon from "./Icon"
import LinkBtn from "./LinkBtn"
import TitleSection from "./TitleSection"

const SectionSkills = () => {
    return (
        <section className="py-15 lg:py-8 ">
            <TitleSection title="My Skills"/>
            <Container>
                {
                    skills.map((skill,index)=>{
                        return <Icon key={index} url={skill.link.url}
                        text={skill.link.text} image={skill.image}/>
                    })
            }
            </Container>
        </section>
    )
}

export default SectionSkills