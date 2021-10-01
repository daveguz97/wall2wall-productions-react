import React, { useRef, useLayoutEffect, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.scss'

const Header = () => {


    const mouseCursor = useRef<HTMLDivElement>()

    const mouseMove = () => {
        const cursor = mouseCursor.current
        window.addEventListener('mousemove', (e) => {
            cursor.style.top = `${e.pageY}px`;
            cursor.style.left = `${e.pageX}px`;
        })
    }

    useLayoutEffect(() => {
        mouseMove()
    })

    return (
        <header className="Landing">
            <div ref={mouseCursor} className="cursor"></div>
            <Navbar cursor={mouseCursor}/>
        </header>
    )
}

export default Header
