import { NavLink } from "react-router-dom"
import type { NavProps } from "../interfaces"
import { useState } from "react"

const NavBar = ({logo,nav_links,bar_icon,cancel_icon}:NavProps) => {
    const [show,setShow]=useState<boolean>(false)
    return (
        <div>
            <nav className="flex justify-between items-center fixed top-0
            w-[calc(100%-56px)] left-5">
                <div className="">
                    <img className="" src={logo.source} alt={logo.alternative} />
                </div>
                <div className="hidden lg:block">
                    <ul className="flex gap-6">
                        {nav_links?.map((link,index)=>{
                            return <li key={index}>
                                <NavLink className="text-primary-color text-[18px] font-medium" 
                                to={link?.url}>{link?.text}</NavLink>
                            </li>
                        })}
                    </ul>
                </div>
                <button onClick={()=>setShow(!show)}
                className="block lg:hidden"><img src={bar_icon.source} alt={bar_icon.alternative} /></button>
            </nav>
            <div className={`${show&&"block"} absolute top-[]`}>
                <ul className="">
                        {nav_links?.map((link,index)=>{
                            return <li key={index}>
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