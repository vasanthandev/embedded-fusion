import React from 'react'
import Image from "next/image";
import {FaArrowRight} from "react-icons/fa";

function Hero() {
    return (
        <section className={'mt-20 container mx-auto px-2 lg:px-8 border-b border-sky-200 '}>
            <div className={"flex justify-center items-center"}>
                <div className={"flex flex-col gap-5 "}>
                    <div className="text-3xl font-bold md:text-5xl text-blue-500 flex flex-col gap-8 pt-20 lg:ps-10">
                        <h2>Innovating <span className={"text-4xl md:text-7xl text-orange-400"}>Embedded</span></h2>
                        <h1 className={"lg:ps-36"}> Systems for a Smarter Future</h1>
                        {/*<h1>Innovation</h1>*/}
                    </div>
                    <div className={"md:mt-12 flex flex-col gap-5"}>
                        {/*<h2 className={"text-2xl md:text-3xl tracking-wide  text-blue-400"}>From custom PCB design to*/}
                        {/*    firmware*/}
                        {/*    development—your ideas, our expertise. </h2>*/}
                        <h2 className={"text-xl md:text-3xl tracking-wide text-orange-400"}>We specialize in IoT,
                            sensors,
                            microcontrollers, and electronics, delivering tailored solutions that power the future.</h2>
                    </div>

                </div>
                <div className={"self-start py-20"}>
                    <Image src={'/assert/img_2.png'} alt={"logog"} height={600} width={600}/>
                    <button
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-3xl p-1 shrink w-fit flex items-center gap-4">
                        <span className="flex w-full bg-gray-900 text-orange-500 text-xl px-3 rounded-3xl p-2">
                          Get a Free Consultation
                    </span>
                        <FaArrowRight className={"text-3xl mr-2"}/>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero
