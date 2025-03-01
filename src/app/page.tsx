import NaveBar from "@/section/NaveBar";
import Hero from "@/section/Hero";
import React from "react";
import Feature from "@/section/Feature";

export default function Home() {
    return (
        <>
            <div className="bg-[#1D2022] body">
                <NaveBar/>
                <Hero/>
                <Feature/>
            </div>

        </>
    );
}
