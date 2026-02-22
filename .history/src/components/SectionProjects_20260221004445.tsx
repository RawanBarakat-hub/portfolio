import { projects } from "../data/data"
import Card from "./Card"
import Container from "./Container"
import TitleSection from "./TitleSection"

const SectionProjects = () => {
    return (
        <section className="py-15 lg:py-8">
            <TitleSection title="My Projects"/>
            <Container>
                {
                    projects.map((project,index)=>{
                        return <Card key={index}
                        image={project.image} title={project.title}
                        text={project.text} code={project.code_link}
                        deploy={/>
                    })
                }
            </Container>
        </section>
    )
}

export default SectionProjects