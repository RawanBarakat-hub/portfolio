import { social_media } from "../data/data"
import Container from "./Container"
import Icon from "./Icon"

const Footer = () => {
    return (
        <footer className="py-15 lg:py-8">
            <Container className="footer">
                {
                    social_media.map((item,index)=>{
                        return <Icon key={index} url={item.url} image={item.image}/>
                    })
                }
            </Container>
            
        </footer>
    )
}

export default Footer