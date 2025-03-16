"use client";

import {Mail, Phone} from "lucide-react";
import {FiFacebook, FiInstagram, FiLinkedin} from "react-icons/fi";
import {RiTwitterXFill} from "react-icons/ri";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-gray-900 text-white ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20">
                <div><a href={'#top'} className={"flex justify-center text-3xl gap-1 font-bold md:col-span-2"}>
                    {/*<Image src={"/assert/logo.png"} alt={"brand logo"} width={50} height={50}/>*/}
                    <h1 className={" text-blue-500"}>Core</h1>
                    <h2 className={" text-orange-500"}>Infinite</h2>
                    <h2 className={" text-blue-500"}>Solution</h2>
                </a></div>
                <div>
                    <h1 className={"text-xl pb-4"}>Contact us</h1>
                    <ul className={"flex flex-col gap-5"}>
                        <Link href="mailto:info@example.com" className={"flex gap-4 items-center"}> <Mail/>sale@cis.com</Link>
                        <Link href="tel:+91-123132" className={"flex gap-4 items-center"}> <Phone/>123132</Link>
                    </ul>
                </div>
                <div>
                    <h1 className={"text-xl pb-4"}>Social</h1>
                    <ul className={"flex flex-col gap-5"}>
                        <Link href="tel:+91-123132" className={"flex gap-4 items-center"}> <FiInstagram
                            className={"text-2xl"}/> ciss@insta</Link>
                        <Link href="tel:+91-123132" className={"flex gap-4 items-center"}> <RiTwitterXFill
                            className={"text-2xl"}/> ciss@insta</Link>
                        <Link href="tel:+91-123132" className={"flex gap-4 items-center"}> <FiFacebook
                            className={"text-2xl"}/> ciss@insta</Link>
                        <Link href="tel:+91-123132" className={"flex gap-4 items-center"}> <FiLinkedin
                            className={"text-2xl"}/> ciss@insta</Link>
                    </ul>
                </div>


            </div>
            <div>
                <p className={"text-center tracking-wide font-thin py-4"}>Copyright {"\u00A9"} 2025 Core Infinite
                    Solution</p>
            </div>
        </div>
    );
};
export default Footer;
