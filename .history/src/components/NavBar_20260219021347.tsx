import { NavLink } from "react-router-dom"
import type { NavProps } from "../interfaces"

const NavBar = ({logo,nav_links,bar_icon,cancel_icon}:NavProps) => {
    return (
        <nav className="flex justify-between items-center p-5">
            <div className="w-25">
                <img className="" src={logo.source} alt={logo.alternative} />
            </div>
            <div className="hidden lg:block">
                <ul className="flex gap-3">
                    {nav_links?.map((link,index)=>{
                        return <li key={index}>
                            <NavLink className="text-primary-color" to={link?.url}>{link?.text}</NavLink>
                        </li>
                    })}
                </ul>
            </div>
            <button className="block lg:hidden"><img src={bar_icon.source} alt={bar_icon.alternative} /></button>
        </nav>
    )
}

export default NavBar