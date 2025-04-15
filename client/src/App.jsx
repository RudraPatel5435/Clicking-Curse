import React, { useRef } from 'react'
import logo from './assets/logo-bg.png'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { Link } from 'react-router'

const App = () => {

    const logoRef = useRef()

    useGSAP(() => {
        gsap.to(logoRef.current, {
            y: 10,
            ease: 'sine.in',
            duration: 1,
            yoyo: true,
            repeat: -1,
        })
    })

    return (
        <div className='h-screen flex gap-12 flex-col items-center justify-center'>

            <div>
                <img ref={logoRef} className='h-[500px]' src={logo} />
            </div>

            <div className="flex flex-col gap-10 items-center justify-center ">
                <Link to='/play' className="border-green-700 border-8 w-96 h-24 bg-green-500 rounded-xl flex items-center justify-center text-4xl">Play</Link>
                <Link to='/instructions' className="w-96 h-24 border-8 border-blue-700 bg-blue-500 rounded-xl flex items-center justify-center text-4xl">Instructions</Link>
                <Link to='login' className="w-96 h-24 bg-neutral-500 border-8 border-neutral-700 rounded-xl flex items-center justify-center text-3xl">Login to save progress</Link>
            </div>
        </div>
    )
}

export default App
