import NaveBar from "@/section/NaveBar";
import Hero from "@/section/Hero";
import React from "react";
import Feature from "@/section/Feature";
import { FaArrowRight } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { LuBrainCircuit } from "react-icons/lu";
import { SiArduino } from "react-icons/si";
import { GiPathDistance } from "react-icons/gi";

export default function Home() {
  return (
    <div>
      <header></header>
      <main className="">
        <div className="bg-gradient-90">
          <NaveBar />
          <section className="container mx-auto">
            <div className="flex flex-col justify-center">
              <div className="text-4xl text-gray-800 lg:text-6xl text-center flex flex-col gap-2 lg:gap-4 mt-16 lg:mt-32">
                <h1>
                  Innovating{" "}
                  <span className="text-blue-500">Embedded Systems</span>{" "}
                </h1>
                <h1>for a Smarter Future</h1>
              </div>
              <p className="mt-12 text-xl lg:text-3xl font-normal lg:leading-10 tracking-tighter text-[#555555] text-center">
                We specialize in IoT, sensors, microcontrollers, and
                electronics, delivering tailored solutions that power the
                future.
              </p>
            </div>
            <div className="p-12 flex justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-3xl p-1 shrink w-fit flex items-center gap-4">
                <span className="flex w-full bg-gray-900 text-orange-500 text-xl px-3 rounded-3xl p-2">
                  Contact us
                </span>
                <FaArrowRight className={"text-3xl mr-2"} />
              </button>
            </div>
          </section>
        </div>
        <section className="container mx-auto px-5 py-16 text-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <Card className="shadow-lg shadow-blue-300 rounded-2xl overflow-hidden h-fit">
              <div className="bg-sky-500  flex justify-center">
                <Image
                  src={"/assert/img_2.png"}
                  alt={"feature one"}
                  width={150}
                  height={150}
                  className="w-40 h-40 object-contain"
                />
              </div>
              <CardContent className={"flex flex-col pt-3  gap-3"}>
                <div className="flex flex-col">
                  <LuBrainCircuit className="text-4xl text-blue-500 self-center my-4" />
                  <div>
                    <h1 className="text-3xl font-semibold">Embedded</h1>
                    <p>
                      we are the most lading company for embedded development
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="lg:mt-20">
              <Card className="shadow-lg shadow-orange-300 rounded-2xl overflow-hidden  h-fit">
                <CardContent className={"flex flex-col pt-3  gap-3"}>
                  <div className="flex flex-col">
                    <SiArduino className="text-4xl text-orange-500 self-center mb-4" />
                    <div>
                      <h1 className="text-3xl font-semibold">Firmware</h1>
                      <p>
                        we are the most lading company for embedded development
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
            </div>
            <Card className="col-span-1 md:col-span-2 shadow-lg shadow-blue-300 rounded-2xl overflow-hidden lg:mt-40">
              <CardContent className={"flex flex-col pt-3  gap-3"}>
                <div>
                  <h1 className="text-3xl py-3">What We Do?</h1>
                  <h4 className="text-xl mb-3">
                    The full service we are offering is specifically designed to
                    meet your business needs.
                  </h4>
                  <p className="font-normal text-gray-500">
                    Donec ullamcorper nulla non metus auctor fringilla. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    quis risus eget urna mollis ornare vel eu leo. Nullam quis
                    risus eget urna mollis ornare vel eu leo. Maecenas faucibus
                    mollis elit interdum. Duis mollis, est non commodo luctus,
                    nisi erat ligula.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="bg-gradient-270 py-8">
          <div className="container mx-auto p-5 text-gray-700 ">
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"> */}
            <h1 className="font-semibold text-black justify-center flex items-center gap-3 text-4xl">
              <span>
                <span className="text-blue-500">O</span>ur{" "}
                <span className="text-orange-500">J</span>ourney
              </span>
              <GiPathDistance />
            </h1>
            <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="md:mt-6 rounded-3xl shadow-lg shadow-blue-300">
                <CardContent className="flex justify-center gap-4 px-6">
                  <Image
                    src={"/assert/project_2.png"}
                    alt={"feature one"}
                    width={150}
                    height={150}
                    className="w-40 h-40 object-contain"
                  />
                  <div className="flex-grow flex items-center gap-4">
                    <div className="flex-grow flex flex-col justify-center">
                      <h4 className="text-start mb-2 text-gray-600 font-normal tracking-tighter text-xl">
                        Projects
                      </h4>
                      <div className="flex items-center">
                        <h1 className="text-5xl font-bold">100</h1>
                        <span className="text-orange-500 text-6xl font-bold ml-2 flex items-center">
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="md:mb-6 rounded-3xl shadow-lg shadow-orange-300">
                <CardContent className="flex justify-center gap-4 px-6">
                  <Image
                    src={"/assert/client.svg"}
                    alt={"feature one"}
                    width={150}
                    height={150}
                    className="w-40 h-40 object-contain"
                  />
                  <div className="flex-grow flex items-center gap-4">
                    <div className="flex-grow flex flex-col justify-center">
                      <div className="flex items-center">
                        <h1 className="text-7xl font-bold">100</h1>
                        <span className="text-blue-500 text-6xl font-bold ml-2 flex items-center">
                          +
                        </span>
                      </div>
                      <h4 className="text-end text-gray-600 font-normal tracking-tighter text-3xl">
                        Clients
                      </h4>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:mt-6 rounded-3xl shadow-lg shadow-orange-300">
                <CardContent className="flex justify-center gap-4 p-3">
                  <Image
                    src={"/assert/experience.png"}
                    alt={"feature one"}
                    width={150}
                    height={150}
                    className="w-40 h-40 object-contain"
                  />
                  <div className="flex-grow flex items-center gap-4">
                    <div className="flex-grow flex flex-col justify-center">
                      <div className="flex items-center">
                        <h1 className="text-7xl font-bold">100</h1>
                        <span className="text-blue-500 text-6xl font-bold ml-2 flex items-center">
                          +
                        </span>
                      </div>
                      <h4 className="text-end text-gray-600 font-normal tracking-tighter text-3xl">
                        Clients
                      </h4>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="md:mb-6 rounded-3xl shadow-lg shadow-blue-300">
                <CardContent className="flex justify-center gap-4 p-3">
                  <Image
                    src={"/assert/employee.svg"}
                    alt={"feature one"}
                    width={150}
                    height={150}
                    className="w-40 h-40 object-contain"
                  />
                  <div className="flex-grow flex items-center gap-4">
                    <div className="flex-grow flex flex-col justify-center">
                      <div className="flex items-center">
                        <h1 className="text-7xl font-bold">100</h1>
                        <span className="text-orange-500 text-6xl font-bold ml-2 flex items-center">
                          +
                        </span>
                      </div>
                      <h4 className="text-end text-gray-600 font-normal tracking-tighter text-3xl">
                        Employees
                      </h4>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-8 mt-2"></div>
          </div>
          {/* </div> */}
        </section>
      </main>
      {/* <footer>footer</footer> */}
    </div>
  );
}
