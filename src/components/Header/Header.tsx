import React, { useRef, useLayoutEffect, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.scss'

const Header = () => {


    const mouseCursorRef = useRef<HTMLDivElement>()

    const mouseMove = () => {
        const {current} = mouseCursorRef
        window.addEventListener('mousemove', (e) => {
            current.style.top = `${e.pageY}px`;
            current.style.left = `${e.pageX}px`;
        })
    }

    useLayoutEffect(() => {
        mouseMove()
    })

    return (
        <header className="Landing">
            <div ref={mouseCursorRef} className="cursor"></div>
            <Navbar cursor={mouseCursorRef}/>
        </header>
    )
}

export default Header
