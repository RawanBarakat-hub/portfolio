import { NavLink } from "react-router-dom"
import type { NavProps } from "../interfaces"
import { useState } from "react"

const NavBar = ({logo,nav_links,bar_icon,cancel_icon}:NavProps) => {
    const [show,setShow]=useState<boolean>(true)
    return (
        <div>
            <nav className="flex justify-between pl-5 pr-9 items-center fixed top-0 z-10
            w-full left-0 bg-background-color shadow-md shadow-primary-color">
                <div className="w-fit">
                    <img src={logo.source} alt={logo.alternative} />
                </div>
                <div className="hidden lg:block">
                    <ul className="flex gap-6">
                        {nav_links?.map((link,index)=>{
                            return <li key={index}>
                                <NavLink className="text-primary-color text-[18px] font-medium hover:text-hover-color" 
                                to={link?.url}>{link?.text}</NavLink>
                            </li>
                        })}
                    </ul>
                </div>
                <button onClick={()=>setShow(!show)}
                className="block lg:hidden"><img src={`${show?bar_icon.source:cancel_icon.source}`}
                alt={`${show?bar_icon.alternative:cancel_icon.alternative}`} /></button>
            </nav>
            <div className={`${show ? "-left-full" :"left-1/2"} absolute top-16.5 
            -translate-x-1/2 py-3.5 bg-background-color w-full transition-all`}>
                <ul className="text-center">
                        {nav_links?.map((link,index)=>{
                            return <li key={index} className="mb-4">
                                <NavLink className="text-primary-color text-[18px] font-medium" 
                                to={link?.url}>{link?.text}</NavLink>
                            </li>
                        })}
                    </ul>
            </div>
        </div>
    )
}

export default NavBar