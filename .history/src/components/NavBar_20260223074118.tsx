import { HashLink } from "react-router-hash-link"
import type { NavProps } from "../interfaces"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"

const NavBar = ({logo,nav_links,bar_icon,cancel_icon}:NavProps) => {
    const [show,setShow]=useState<boolean>(false)
    return (
        <div className="relative">
            <nav className="flex justify-between pl-5 pr-9 items-center fixed top-0 z-50
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
                <motion.button
        onClick={() => setShow(!show)}
        className="block lg:hidden"
        whileTap={{ scale: 0.9 }}
        >
        <AnimatePresence mode="wait">
            {show ? (
            <motion.img
                key="close"
                src={cancel_icon.source}
                alt={cancel_icon.alternative}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
            />
            ) : (
            <motion.img
                key="bars"
                src={bar_icon.source}
                alt={bar_icon.alternative}
                initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
            />
            )}
        </AnimatePresence>
        </motion.button>
            </nav>
            <div className={`
                    lg:hidden
                    fixed
                    top-16
                    left-0
                    z-20
                    w-full
                    bg-background-color
                    transition-transform
                    duration-300 py-5
                    ${show ? "translate-y-0" : "-translate-y-full"}
                `}>
                <ul className="text-center">
                        {nav_links?.map((link,index)=>{
                            return <li key={index} className="mb-4">
                                <HashLink smooth className="text-primary-color text-[18px] font-medium" 
                                to={link?.url} onClick={() => setShow(false)}>{link?.text}</HashLink>
                            </li>
                        })}
                    </ul>
            </div>
        </div>
    )
}

export default NavBar