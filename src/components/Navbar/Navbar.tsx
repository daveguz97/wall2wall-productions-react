import React, { useRef, useLayoutEffect } from 'react'
import './Navbar.scss'

type NavbarProps = {
    cursor: any
}

const Navbar = (({ cursor }: NavbarProps) => {
    const linkRef = useRef<(HTMLAnchorElement | null)[]>([])
    const navLinks = ["Home", "About Me", "Featured Work", "Contact", "Pricing"]
    const linkEffect = () => {
        const { current } = linkRef
        console.log(current)
        window.onload = () => {
            current.map(link => {
                link.addEventListener("mouseleave", () => {
                    cursor.current.classList.remove("link-grow");
                    link.classList.remove("hovered-link");
                })
                link.addEventListener("mouseover", () => {
                    cursor.current.classList.add("link-grow");
                    link.classList.add("hovered-link");
                })
            })
        }
    }

    useLayoutEffect(() => {
        linkEffect()
    })

    return (
        <nav className="Navbar">
            <h5 className="logo">Wall2Wall Productions</h5>
            <ul className="nav-links">
                {navLinks.map((item) => {
                    return (

                        <li key={item} className="nav-item">
                            <a key={item} href="#" className="nav-link" ref={(element) => { linkRef.current.push(element) }}>
                                {item}
                            </a>
                        </li>

                    )
                })}
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
