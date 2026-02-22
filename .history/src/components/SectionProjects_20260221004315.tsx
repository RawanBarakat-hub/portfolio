import { projects } from "../data/data"
import Container from "./Container"
import TitleSection from "./TitleSection"

const SectionProjects = () => {
    return (
        <section className="py-15 lg:py-8">
            <TitleSection title="My Projects"/>
            <Container>
                {
                    projects.map
                }
            </Container>
        </section>
    )
}

export default SectionProjects