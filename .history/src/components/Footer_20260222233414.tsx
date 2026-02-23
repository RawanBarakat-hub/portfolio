import { social_media } from "../data/data"
import Container from "./Container"
import Icon from "./Icon"
import WelcomeText from "./WelcomeText"

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
            <p><WelcomeText text="Made by"/> <h4>Eng</h4></p>
        </footer>
    )
}

export default Footer