import { useRef, useLayoutEffect } from 'react'
import './Navbar.scss'

type NavbarProps = {
    cursor: any
}

const Navbar = (({ cursor }: NavbarProps) => {
    const navRef = useRef<HTMLDivElement>()
    const navLinks = ["Home", "About Me", "Featured Work", "Contact", "Pricing"]

    const handleMouseOver = (e) => {
        cursor.current.classList.add("link-grow");
        e.target.classList.add("hovered-link");
    }
    const handleMouseLeave = (e) => {
        cursor.current.classList.remove("link-grow");
        e.target.classList.remove("hovered-link");
    }


    const fixedNav = () => {
        const { current } = navRef
        window.addEventListener("scroll", () => {
            const { scrollY, innerWidth } = window
            if (scrollY >= 62 && innerWidth > 900) {
                current.classList.add("fixed-nav")
            }
            else {
                current.classList.remove("fixed-nav")
            }
        })
    }

    useLayoutEffect(() => {
        fixedNav()
    })

    return (
        <nav className="Navbar" ref={navRef}>
            <h5 className="logo">Wall2Wall Productions</h5>
            <ul className="nav-links">
                {navLinks.map((item) => {
                    return (
                        <li key={item} className="nav-item">
                            <a key={item} href="#" className="nav-link" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
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
