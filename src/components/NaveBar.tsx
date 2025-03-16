"use client"
import React, {useEffect, useState} from 'react'
import {CiLocationArrow1, CiMenuFries} from "react-icons/ci";

import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet"

const NaveBar = () => {

    const naveOption : string[] = [
        "Home",
        "About",
        "Services",
        "Projects",
        "Blog",
        "Contact",
    ]
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10); // Detect if scrolled
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <section className={""}>
            {/*<h1 className={"bg-blue-400 font-serif text-white text-xl"}>Feature Embedded</h1>*/}
            <nav
                className={`w-full h-20 fixed top-0 px-2 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 backdrop-blur-md  duration-300 ${
                    isScrolled ? "shadow-md bg-white/70" : "bg-transparent"
                }`}
            >
                <a href={'#top'} className={"flex justify-end text-3xl gap-1 font-bold"}>
                    {/*<Image src={"/assert/logo.png"} alt={"brand logo"} width={50} height={50}/>*/}
                    <h1 className={" text-blue-500"}>Core</h1>
                    <h2 className={" text-orange-500"}>Infinite</h2>
                    <h2 className={" text-blue-500"}>Solution</h2>
                </a>
                <ul className={"hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 rounded-full bg-white shadow-sm shadow-sky-300"}>
                    {
                        naveOption.map((option, index) =>
                            <li key={index} className={"nave__link h"}>{option} </li>)
                    }
                </ul>
                <div>
                    <a href={'#contact'} className={"hidden group md:flex items-center gap-3 px-10 py-2.5 rounded-full border border-blue-500 font-bold text-blue-800 duration-200 transition ease-in hover:text-white hover:bg-orange-300 tracking-widest"}>
                        Contact
                        <CiLocationArrow1 className={"h-5 w-5 text-blue-800 group-hover:text-white "} />
                    </a>
                </div>
                <div className={"block md:hidden"}>
                    <Sheet>
                        <SheetTrigger >  <CiMenuFries /></SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Are you absolutely sure?</SheetTitle>
                                <SheetContent>
                                    <ul className={"flex flex-col gap-3 mt-4"}>
                                        {
                                            naveOption.map((option, index) =>
                                                <li key={index} className={"nave__link"}>{option} </li>
                                            )
                                        }
                                    </ul>
                                </SheetContent>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
            {/*<ThemeToggler  />*/}
        </section>
    )
}
export default NaveBar
