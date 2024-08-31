"use client"
import React, { useEffect } from "react";
import { projects } from "./data";
import Card from "./card";
import Lenis from "@studio-freight/lenis"


const SecondSection = () => {


   
    useEffect(() => {

        const lenis = new Lenis()



        function raf(time: any) {

            lenis.raf(time)

            requestAnimationFrame(raf)

        }



        requestAnimationFrame(raf)

    })


    return (
        <main className="px-4">
            {
                projects.map((project, index) => {
                    return <Card i={index} key={index}  {...project} />
                })
            }
        </main>
    )
}

export default SecondSection