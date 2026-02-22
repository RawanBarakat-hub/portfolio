import type { NavProps } from "../interfaces"

const NavBar = ({logo,nav_links,bar_icon,cancel_icon}:NavProps) => {
    return (
        <nav>
            <div>
                <img src={logo.} alt="" />
            </div>
        </nav>
    )
}

export default NavBar