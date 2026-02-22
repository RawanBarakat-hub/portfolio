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
                    return <LinkBtn />
                })
            }
            </Container>
        </section>
    )
}

export default SectionSkills