"use client"

import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"
import {Card} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay"
import React from "react";
import Image from "next/image";

const projects = [
    {
        tittle:"This is title",
        description:"This is description",
        image:"/assert/pro_1.jpg"
    },{
        tittle:"This is title",
        description:"This is description",
        image:"/assert/pro_2.jpg"
    },{
        tittle:"This is title",
        description:"This is description",
        image:"/assert/pro_3.jpg"
    },{
        tittle:"This is title",
        description:"This is description",
        image:"/assert/pro_4.jpg"
    },{
        tittle:"This is title",
        description:"This is description",
        image:"/assert/pro_5.jpg"
    },
]

function Projects() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )


    return (
        <section className="p-8">
           <div className={"px-12"}>
               <Carousel
                   opts={{
                       align: "start",
                       loop: true,
                   }}
                   plugins={[plugin.current]}
                   onMouseEnter={plugin.current.stop}
                   onMouseLeave={plugin.current.reset}
                   className="w-full">
                   <CarouselContent className="-ml-1 rounded-3xl">
                       {projects.map((project, index) => (
                           <CarouselItem key={index} className="pl-1  ">
                               <div className="p-1  overflow-hidden shadow-sky-300 shadow-md">
                                   <Card className={"h-40"}>
                                       <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                                           {/* Image takes half the width */}
                                           <div className="relative w-full h-20 md:h-full overflow-hidden md:rounded-l-xl">
                                               <Image alt="project one" src={project.image} fill className="object-cover" />
                                           </div>

                                           {/* Empty or another content */}
                                           <div className="flex flex-col gap-4 items-center justify-center">
                                               <h1 className={"text-3xl -tracking-wider"}>{project.tittle}</h1>
                                               <p>{project.description}</p>
                                           </div>
                                       </div>

                                   </Card>
                               </div>
                           </CarouselItem>
                       ))}
                   </CarouselContent>
                   <CarouselPrevious />
                   <CarouselNext />
               </Carousel>
           </div>
        </section>
    )
}

export default Projects
