import { social_media } from "../data/data"
import Container from "./Container"
import Icon from "./Icon"
import WelcomeText from "./WelcomeText"

const Footer = () => {
    return (
        <footer className="py-15 lg:py-1">
            <Container className="footer">
                {
                    social_media.map((item,index)=>{
                        return <Icon key={index} url={item.url} image={item.image}/>
                    })
                }
            </Container>
            <div className="flex gap-2 justify-center items-center mt-4 lg:mt-6">
                <WelcomeText text="Made by:"/> <h4 className="font-mons text-primary-color 
                text-2xl lg:text-5xl">Eng.Rawan Barakat</h4>
            </div>
        </footer>
    )
}

export default Footer