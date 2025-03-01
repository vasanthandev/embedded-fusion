import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";

const feature: { icon: string, content: string }[] = [
    {
        icon: "/assert/feature_1.png",
        content: "Custom Firmware Development"
    }, {
        icon: "/assert/feature_4.jpg",
        content: "PCB Design & Prototyping"
    }, {
        icon: "/assert/feature_2.png",
        content: "IoT & Smart Device Integration"
    }, {
        icon: "/assert/feature_3.jpg",
        content: "Embedded AI & Machine Learning"
    },

]

function Feature() {
    return (
        // <div className={"container mx-auto px-2 lg:px-8 xl:px-[8%] bg-[url(/assert/bg_img_3.png)] bg-contain bg-opacity-10 py-10"}>
        <div className={"container mx-auto px-2 lg:px-8  py-10"}>
            <div className={"flex flex-col gap-5 "}>
                {feature.map((item, index) => (
                    <Card key={index} className={`w-2/3 bg-slate-900 text-blue-500 ${index % 2 == 0 ? 'self-start' : 'self-end'}`}>
                    <CardContent  className={"flex items-center gap-x-3 pt-6"}>
                        <Image src={item.icon} alt={"feature one"}  width={150} height={150} className="w-40 h-40 object-contain"  />
                        <p>{item.content}</p>
                    </CardContent>
                </Card>))}
            </div>
        </div>
    )
}

export default Feature
