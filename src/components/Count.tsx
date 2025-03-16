"use client"
import React, {useEffect, useRef, useState} from 'react'
import {GiPathDistance} from "react-icons/gi";
import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";
import {useInView} from "framer-motion";

const Counter = ({ target }: { target: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Trigger only once when in view

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000; // Animation duration in ms
            const stepTime = duration / target;

            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start >= target) clearInterval(timer);
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [isInView, target]);

    return (
        <span ref={ref} className="text-5xl font-bold">
      {count}
    </span>
    );
};
function Count() {
    return (
        <section className="bg-gradient-270 py-8">
            <div className="container mx-auto p-5 text-gray-700 ">
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"> */}
                <h1 className="font-semibold text-black justify-center flex items-center gap-3 text-4xl">
              <span>
                <span className="text-blue-500">Why </span>Choose{" "}
                  <span className="text-orange-500">us</span>
              </span>
                    <GiPathDistance />
                </h1>
                <p className={"text-xl py-4 text-center"}>Qmax has over 20 years of experience in designing complex hardware for the most challenging applications.
                    We can provide Quick, Cost effective and First time Right solutions for your requirements.</p>
                <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { title: "Projects", image: "/assert/project_2.png", count: 100 },
                        { title: "Clients", image: "/assert/client.svg", count: 100 },
                        { title: "Experience", image: "/assert/experience.png", count: 20 },
                        { title: "Employees", image: "/assert/employee.svg", count: 100 },
                    ].map((item, index) => (

                        <Card className={`md:mt-6 rounded-3xl shadow-lg  ${index % 2 == 0 ? 'shadow-blue-300': 'shadow-orange-300'}`} key={index}>
                        <CardContent className="flex justify-center gap-4 p-0 px-6">
                            <Image
                                src={item.image}
                                alt={"feature one"}
                                width={150}
                                height={150}
                                className="w-40 h-40 object-contain"
                            />
                            <div className="flex-grow flex items-center gap-4">
                                <div className="flex-grow flex flex-col justify-center">
                                    <h4 className="text-start mb-2 text-gray-600 font-normal tracking-tighter text-xl">
                                        {item.title}
                                    </h4>
                                    <div className="flex items-center">
                                        <Counter target={item.count} />
                                        <span className="text-orange-500 text-6xl font-bold ml-2 flex items-center">
                          +
                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    //     <motion.div
                    //         key={index}
                    //         initial={{ opacity: 0, y: 50 }}
                    //         whileInView={{ opacity: 1, y: 0 }}
                    //         transition={{ duration: 1, delay: index * 0.2 }}
                    //         viewport={{ once: true }}
                    //     >
                    //         <div className="rounded-3xl shadow-lg shadow-blue-300 p-6 flex gap-4 items-center">
                    //             <Image
                    //                 src={item.image}
                    //                 alt={item.title}
                    //                 width={100}
                    //                 height={100}
                    //                 className="w-32 h-32 object-contain"
                    //             />
                    //             <div className="flex-grow flex flex-col justify-center">
                    //                 <h4 className="text-gray-600 font-normal tracking-tighter text-xl">
                    //                     {item.title}
                    //                 </h4>
                    //                 <div className="flex items-center">
                    //                     <Counter target={item.count} />
                    //                     <span className="text-orange-500 text-6xl font-bold ml-2 flex items-center">
                    //   +
                    // </span>
                    //                 </div>
                    //             </div>
                    //         </div>
                    //     </motion.div>
                    ))}
                    {/*<Card className="md:mt-6 rounded-3xl shadow-lg shadow-blue-300">*/}
                    {/*    <CardContent className="flex justify-center gap-4 p-0 px-6">*/}
                    {/*        <Image*/}
                    {/*            src={"/assert/project_2.png"}*/}
                    {/*            alt={"feature one"}*/}
                    {/*            width={150}*/}
                    {/*            height={150}*/}
                    {/*            className="w-40 h-40 object-contain"*/}
                    {/*        />*/}
                    {/*        <div className="flex-grow flex items-center gap-4">*/}
                    {/*            <div className="flex-grow flex flex-col justify-center">*/}
                    {/*                <h4 className="text-start mb-2 text-gray-600 font-normal tracking-tighter text-xl">*/}
                    {/*                    Projects*/}
                    {/*                </h4>*/}
                    {/*                <div className="flex items-center">*/}
                    {/*                    <h1 className="text-5xl font-bold">100</h1>*/}
                    {/*                    <span className="text-orange-500 text-6xl font-bold ml-2 flex items-center">*/}
                    {/*      +*/}
                    {/*    </span>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </CardContent>*/}
                    {/*</Card>*/}
                    {/*<Card className="md:mb-6 rounded-3xl shadow-lg shadow-orange-300">*/}
                    {/*    <CardContent className="flex justify-center gap-4 px-6">*/}
                    {/*        <Image*/}
                    {/*            src={"/assert/client.svg"}*/}
                    {/*            alt={"feature one"}*/}
                    {/*            width={150}*/}
                    {/*            height={150}*/}
                    {/*            className="w-40 h-40 object-contain"*/}
                    {/*        />*/}
                    {/*        <div className="flex-grow flex items-center gap-4">*/}
                    {/*            <div className="flex-grow flex flex-col justify-center">*/}
                    {/*                <h4 className="text-gray-600 font-normal tracking-tighter text-xl">*/}
                    {/*                    Clients*/}
                    {/*                </h4>*/}
                    {/*                <div className="flex items-center">*/}
                    {/*                    <h1 className="text-5xl font-bold">100</h1>*/}
                    {/*                    <span className="text-blue-500 text-6xl font-bold ml-2 flex items-center">*/}
                    {/*      +*/}
                    {/*    </span>*/}
                    {/*                </div>*/}

                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </CardContent>*/}
                    {/*</Card>*/}

                    {/*<Card className="md:mt-6 rounded-3xl shadow-lg shadow-orange-300">*/}
                    {/*    <CardContent className="flex justify-center gap-4 p-3">*/}
                    {/*        <Image*/}
                    {/*            src={"/assert/experience.png"}*/}
                    {/*            alt={"feature one"}*/}
                    {/*            width={150}*/}
                    {/*            height={150}*/}
                    {/*            className="w-40 h-40 object-contain"*/}
                    {/*        />*/}
                    {/*        <div className="flex-grow flex items-center gap-4">*/}
                    {/*            <div className="flex-grow flex flex-col justify-center">*/}
                    {/*                <h4 className="text-gray-600 font-normal tracking-tighter text-xl">*/}
                    {/*                    Clients*/}
                    {/*                </h4>*/}
                    {/*                <div className="flex items-center">*/}
                    {/*                    <h1 className="text-5xl font-bold">100</h1>*/}
                    {/*                    <span className="text-blue-500 text-6xl font-bold ml-2 flex items-center">*/}
                    {/*      +*/}
                    {/*    </span>*/}
                    {/*                </div>*/}

                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </CardContent>*/}
                    {/*</Card>*/}
                    {/*<Card className="md:mb-6 rounded-3xl shadow-lg shadow-blue-300">*/}
                    {/*    <CardContent className="flex justify-center gap-4 p-3">*/}
                    {/*        <Image*/}
                    {/*            src={"/assert/employee.svg"}*/}
                    {/*            alt={"feature one"}*/}
                    {/*            width={150}*/}
                    {/*            height={150}*/}
                    {/*            className="w-40 h-40 object-contain"*/}
                    {/*        />*/}
                    {/*        <div className="flex-grow flex items-center gap-4">*/}
                    {/*            <div className="flex-grow flex flex-col justify-center">*/}
                    {/*                <h4 className="text-gray-600 font-normal tracking-tighter text-xl">*/}
                    {/*                    Employees*/}
                    {/*                </h4>*/}
                    {/*                <div className="flex items-center">*/}
                    {/*                    <h1 className="text-5xl font-bold">100</h1>*/}
                    {/*                    <span className="text-orange-500 text-6xl font-bold ml-2 flex items-center">*/}
                    {/*      +*/}
                    {/*    </span>*/}
                    {/*                </div>*/}

                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </CardContent>*/}
                    {/*</Card>*/}
                </div>
                <div className="grid grid-cols-8 mt-2"></div>
            </div>
            {/* </div> */}
        </section>
    )
}

export default Count
