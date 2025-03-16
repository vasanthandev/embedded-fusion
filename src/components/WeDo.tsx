"use client"

import React from 'react'
import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";
import {LuBrainCircuit} from "react-icons/lu";
import {SiArduino} from "react-icons/si";
import {motion} from "framer-motion";


function WeDo() {
    return (
        <>
            <section className="container mx-auto px-5 py-16 text-gray-700">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.2}}
                    variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0, transition: {staggerChildren: 0.3}}
                    }}
                >
                    {/* Main Card */}
                    <motion.div
                        className={"col-span-1 md:col-span-2"}
                        variants={{hidden: {opacity: 0, y: 50}, visible: {opacity: 1, y: 0}}}>
                        <Card className=" shadow-lg shadow-blue-300 rounded-2xl overflow-hidden h-fit">
                            <CardContent className="flex flex-col pt-3 gap-3">
                                <div>
                                    <h1 className="text-3xl py-3">What We Do?</h1>
                                    <h4 className="text-xl mb-3">
                                        The full service we are offering is specifically designed to
                                        meet your business needs.
                                    </h4>
                                    <p className="font-normal text-gray-500">
                                        Donec ullamcorper nulla non metus auctor fringilla. Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                        quis risus eget urna mollis ornare vel eu leo.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Embedded Card */}
                    <motion.div
                        variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}
                        transition={{duration: 0.6}}
                    >
                        <Card className="shadow-lg lg:mt-10 shadow-blue-300 rounded-2xl overflow-hidden h-fit">
                            <div className="bg-sky-500 flex justify-center">
                                <Image
                                    src={"/embedded-fusion/assert/img_2.png"}
                                    alt={"feature one"}
                                    width={150}
                                    height={150}
                                    className="w-40 h-40 object-contain"
                                />
                            </div>
                            <CardContent className="flex flex-col pt-3 gap-3">
                                <div className="flex flex-col">
                                    <LuBrainCircuit className="text-4xl text-blue-500 self-center my-4"/>
                                    <div>
                                        <h1 className="text-3xl font-semibold">Embedded</h1>
                                        <p>
                                            We are the leading company for embedded development.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Firmware Card */}
                    <motion.div
                        className="lg:mt-20"
                        variants={{hidden: {opacity: 0, x: 50}, visible: {opacity: 1, x: 0}}}
                        transition={{duration: 0.6}}
                    >
                        <Card className="shadow-lg shadow-orange-300 rounded-2xl overflow-hidden h-fit">
                            <CardContent className="flex flex-col pt-3 gap-3">
                                <div className="flex flex-col">
                                    <SiArduino className="text-4xl text-orange-500 self-center mb-4"/>
                                    <div>
                                        <h1 className="text-3xl font-semibold">Firmware</h1>
                                        <p>
                                            We are the leading company for firmware development.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                            <div className="bg-orange-500 h-full flex justify-center">
                                <Image
                                    src={"/assert/feature_1.png"}
                                    alt={"feature one"}
                                    width={150}
                                    height={150}
                                    className="w-40 h-40 object-contain"
                                />
                            </div>
                        </Card>
                    </motion.div>

                </motion.div>
            </section>

        </>

    )
}

export default WeDo
