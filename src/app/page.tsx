"use client"

import NaveBar from "@/section/NaveBar";
import React from "react";
import {FaArrowRight} from "react-icons/fa";
import Projects from "@/components/Projects";
import Count from "@/components/Count";
import WeDo from "@/components/WeDo";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div>
            <header></header>
            <main className="">
                <div className="bg-gradient-90">
                    <NaveBar/>
                    <section className="container mx-auto">
                        <div className="flex flex-col justify-center">
                            {/* Animated Heading */}
                            <motion.div
                                className="text-4xl text-gray-800 lg:text-6xl text-center flex flex-col gap-2 lg:gap-4 mt-16 lg:mt-32"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                <h1>
                                    Innovating{" "}
                                    <motion.span
                                        className="text-blue-500"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                    >
                                        Embedded Systems
                                    </motion.span>{" "}
                                </h1>
                                <h1>for a Smarter Future</h1>
                            </motion.div>

                            {/* Animated Subtitle */}
                            <motion.p
                                className="mt-12 text-xl lg:text-3xl font-normal lg:leading-10 tracking-tighter text-[#555555] text-center"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 1 }}
                            >
                                We specialize in IoT, sensors, microcontrollers, and electronics,
                                delivering tailored solutions that power the future.
                            </motion.p>
                        </div>

                        {/* Animated Button */}
                        <motion.div
                            className="p-12 flex justify-center"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 1 }}
                        >
                            <motion.button
                                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-3xl p-1 shrink w-fit flex items-center gap-4"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                    <span className="flex w-full bg-gray-900 text-orange-500 text-xl px-3 rounded-3xl p-2">
                        Contact us
                    </span>
                                <FaArrowRight className="text-3xl mr-2"/>
                            </motion.button>
                        </motion.div>
                    </section>
                </div>
                <WeDo/>
                <Count/>
                <Projects/>
            </main>
            <footer>
                <Footer/>
            </footer>
            {/* <footer>footer</footer> */}
        </div>
    );
}
