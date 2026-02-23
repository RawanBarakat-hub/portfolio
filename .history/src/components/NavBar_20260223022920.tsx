import { HashLink } from "react-router-hash-link"
import type { NavProps } from "../interfaces"
import { useState } from "react"

const NavBar = ({logo,nav_links,bar_icon,cancel_icon}:NavProps) => {
    const [show,setShow]=useState<boolean>(false)
    return (
        <div className="relative">
            <nav className="flex justify-between pl-5 pr-9 items-center fixed top-0 z-10
            w-full left-0 bg-background-color shadow-md shadow-primary-color">
                <div className="w-fit">
                    <img src={logo.source} alt={logo.alternative} />
                </div>
                <div className="hidden lg:block">
                    <ul className="flex gap-6">
                        {nav_links?.map((link,index)=>{
                            return <li key={index}>
                                <HashLink smooth className="text-primary-color text-[18px] font-medium hover:text-hover-color" 
                                to={link?.url}>{link?.text}</HashLink>
                            </li>
                        })}
                    </ul>
                </div>
                <button onClick={()=>setShow(!show)}
                className="block lg:hidden"><img src={`${show?bar_icon.source:cancel_icon.source}`}
                alt={`${show?bar_icon.alternative:cancel_icon.alternative}`} /></button>
            </nav>
            <div
                className={`
                    lg:hidden
                    fixed
                    top-16
                    left-0
                    w-full
                    bg-background-color
                    transition-transform
                    duration-300
                    ${show ? "translate-y-0" : "-translate-y-full"}
                `}
                    >
                <ul className="text-center">
                        {nav_links?.map((link,index)=>{
                            return <li key={index} className="mb-4">
                                <HashLink smooth className="text-primary-color text-[18px] font-medium" 
                                to={link?.url}>{link?.text}</HashLink>
                            </li>
                        })}
                    </ul>
            </div>
        </div>
    )
}

export default NavBar