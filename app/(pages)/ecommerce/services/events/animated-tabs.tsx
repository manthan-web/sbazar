"use client"
import React, { useEffect } from 'react'
import Card from '../../grocery/card'
import { projects } from './data'
import Lenis from "@studio-freight/lenis"


const AnimatedTabsSection = () => {



    useEffect(() => {

        const lenis = new Lenis()



        function raf(time: any) {

            lenis.raf(time)

            requestAnimationFrame(raf)

        }



        requestAnimationFrame(raf)

    })

    return (
        <main className="py-12 px-4">
            {
                projects.map((project, index) => {
                    return <Card i={index} key={index}  {...project} />
                })
            }
        </main>
    )
}

export default AnimatedTabsSection