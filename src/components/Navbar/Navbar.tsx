import React, { useRef, useLayoutEffect, useEffect } from 'react'
import './Navbar.scss'

type NavbarProps = {
    cursor: any
}

const Navbar = React.forwardRef(({ cursor }: NavbarProps) => {
    const navLink = useRef<HTMLAnchorElement>()
    const linkEffect = () => {
        const currentNavLink = navLink.current
        currentNavLink.addEventListener("mouseleave", () => {
            cursor.current.classList.remove("link-grow");
            currentNavLink.classList.remove("hovered-link");
        })
        currentNavLink.addEventListener("mouseover", () => {
            cursor.current.classList.add("link-grow");
            currentNavLink.classList.add("hovered-link");
        })
    }

    useLayoutEffect(() => {
        linkEffect()
    })

    return (
        // Fix the navbar glitch
        <nav className="Navbar">
            <h5 className="logo">Wall2Wall Productions</h5>
            <ul className="nav-links">
                <li className="nav-item">
                    <a href="#" className="nav-link" >Home</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link" ref={navLink}>About me</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link" ref={navLink}>Featured Work</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link"
                        ref={navLink}>Contact</a>
                </li>
            </ul>
            <div className="burger">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
            </div>
        </nav>
    )
})

export default Navbar
