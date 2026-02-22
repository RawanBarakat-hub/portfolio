import { NavLink } from "react-router-dom"
import type { NavProps } from "../interfaces"

const NavBar = ({logo,nav_links,bar_icon,cancel_icon}:NavProps) => {
    return (
        <nav>
            <div>
                <img src={logo.source} alt={logo.alternative} />
            </div>
            <div>
                <ul>
                    {nav_links.map((link,index)=>{
                        return <li>
                            <NavLink
                        </li>
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar