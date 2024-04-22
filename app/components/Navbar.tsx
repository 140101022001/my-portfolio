"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

const links = [
    {
        href: '#about',
        label: 'About'
    },
    {
        href: '#experience',
        label: 'Experience'
    },
    {
        href: '#projects',
        label: 'Projects'
    },
    {
        href: '#contact',
        label: 'Contact'
    },
]

const Navbar = () => {
    const [menu, setMenu] = useState<boolean>(false);

    const NavLink = ({ className, aClassName }: { className: string, aClassName?: string }) => (
        <ul className={className}>
            {
                links.map((link) => (
                    <li key={link.label}><a href={link.href} className={`text-[1.7rem] text-gray-400 hover:text-white duration-200 ${aClassName ?? ''}`} onClick={() => setMenu(false)}>{link.label}</a></li>
                ))
            }
        </ul>
    )

    return (
        <nav className="flex fixed w-full items-center justify-between px-[10%] h-[120px] z-10 shadow-2xl bg-bg-color">
            <div>
                <a href="#hero" className="text-[3rem] font-semibold">Portfolio.</a>
            </div>
            <div>
                <NavLink className="lg:flex hidden items-center justify-between gap-[4rem] lg:visible" />
                <Menu className="h-10 w-10 lg:hidden cursor-pointer" onClick={() => setMenu(true)} />
                {menu && <div className="fixed top-0 bottom-0 right-0 h-screen w-screen bg-black opacity-20 z-10" onClick={() => setMenu(false)} />}
                <div className={`fixed top-0 bottom-0 ${menu ? 'right-0' : 'right-[-380px]'} h-screen w-[380px] z-10 bg-bg-color transition-all duration-300 opacity-100 p-5`}>
                    <div className="flex justify-between">
                        <div />
                        <X className="w-8 h-8 cursor-pointer" onClick={() => setMenu(false)} />
                    </div>
                    <div>
                        <NavLink className="flex flex-col justify-center gap-[2rem]" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar