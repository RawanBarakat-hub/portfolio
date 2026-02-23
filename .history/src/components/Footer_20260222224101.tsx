import { social_media } from "../data/data"
import Container from "./Container"

const Footer = () => {
    return (
        <footer className="py-15 lg:py-8">
            <Container>
                {
                    social_media.map((item,index)=>{
                        return <Icon url={item.url} image={item.image}/>
                    })
                }
            </Container>
        </footer>
    )
}

export default Footer