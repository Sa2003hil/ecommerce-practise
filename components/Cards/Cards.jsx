"use client"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import React, { useState } from 'react';
import Image from "next/image";
import model from "../../assets/images/model2.jpg";
import './Cards.css';
import { IconButton } from "@material-tailwind/react";
import model1 from '../../assets/images/asset 8.png'
import model2 from '../../assets/images/asset 12.png'
import model3 from '../../assets/images/asset 19.png'
import model4 from '../../assets/images/asset 24.png'
import model5 from '../../assets/images/asset 16.png'
import model6 from '../../assets/images/asset 13.png'
import { IoBagHandleOutline } from "react-icons/io5";

export function Cards() {
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredIcon, setIsHoveredIcon] = useState(false);
    return (
        <div className="card-container shadow-2xl" onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <Card className="w-[18rem] ">
                <div className="card-content">
                    <div>
                        <div className=" p-4 rounded-t-lg flex justify-between">
                            <Typography color="blue-gray" className="mt-3 font font-extrabold uppercase text-[13px] " >
                                COLVIN KLEVIN
                            </Typography>
                            <Typography color="blue-gray" className="mt-2 font font-semibold uppercase text-xl " >
                                $44.00
                            </Typography>
                        </div>

                    </div>
                    <CardHeader shadow={false} floated={false} className="h-80 relative">
                        <div
                            className="relative"
                        >
                            <Image
                                src={isHovered ? model6 : model2} // Use different image based on hover state
                                alt="card-image"
                                width={70}
                                height={70}
                                className="h-full w-full object-cover rounded-md transition duration-500 ease-in-out"
                            />
                            <div className="flex justify-between">
                                <button className="absolute top-2 left-2 bg-[#0cae61] text-white text-[10px] p-[2px] w-11 font-medium  rounded-md">NEW</button>
                                <button className="absolute top-2 right-2"><a href="#buttons-with-link">

                                    <i className="fas fa-heart" />

                                </a></button>
                            </div>
                        </div>
                    </CardHeader>

                    <CardBody>
                        <div className="flex">
                            <button className="border-gray-400 border-[1px] text-[12px] text-black rounded-lg p-[3px] w-[50px] h-6 text-center m-auto flex justify-center items-center hover:shadow-xl hover:border-[#0067ff]">Blue</button>
                            <button className="border-gray-400 border-[1px] text-[12px] text-black rounded-lg p-[3px] w-[50px] h-6 text-center m-auto flex justify-center items-center hover:shadow-xl hover:border-[#0067ff]">Green</button>
                            <button className="border-gray-400 border-[1px] text-[12px] text-black rounded-lg p-[3px] w-[50px] h-6 text-center m-auto flex justify-center items-center hover:shadow-xl hover:border-[#0067ff]">Grey</button>
                            <button className="border-gray-400 border-[1px] text-[12px] text-black rounded-lg p-[3px] w-[50px] h-6 text-center m-auto flex justify-center items-center hover:shadow-xl hover:border-[#0067ff]">Violet</button>
                        </div>
                        <div className="mb-2 mt-3 flex flex-col items-center text-black justify-center">
                            <Typography color="blue-gray" className="font-medium">
                                Loose Padet Jacket
                            </Typography>
                            <div class="grid w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                                <div class="inline-flex items-center"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="currentColor" class="w-6 h-6 text-yellow-700 cursor-pointer">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clip-rule="evenodd"></path>
                                </svg></span><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6 text-yellow-700 cursor-pointer">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clip-rule="evenodd"></path>
                                </svg></span><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6 text-yellow-700 cursor-pointer">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clip-rule="evenodd"></path>
                                </svg></span><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6 text-yellow-700 cursor-pointer">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clip-rule="evenodd"></path>
                                </svg></span><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6 cursor-pointer text-blue-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                    </path>
                                </svg></span></div>
                            </div>
                        </div>
                        {/* <Typography
                            variant="small"
                            color="gray"
                            className="font-normal opacity-75"
                        >
                            With plenty of talk and listen time, voice-activated Siri access, and
                            an available wireless charging case.
                        </Typography> */}
                    </CardBody>
                    {/* <CardFooter className="pt-0">
                        <Button
                            ripple={false}
                            fullWidth={true}
                            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        >
                            Add to Cart
                        </Button>
                    </CardFooter> */}
                </div>
                <div className="hover-content rounded-xl mr-2 ml-2 z-0 ">
                    <div className="hover-inner flex flex-col justify-center items-center gap-4  ">
                        <p className="font-medium font mt-4 text-center hover:text-[#0067ff] hover:cursor-pointer ">Loose Padet Jacket</p>
                        <div className="flex gap-2">
                            <button className="border-gray-400 border-[1px] text-[12px] text-black rounded-lg p-[3px] w-[50px] h-6 text-center m-auto flex justify-center items-center hover:shadow-xl hover:border-[#0067ff]">Blue</button>
                            <button className="border-gray-400 border-[1px] text-[12px] text-black rounded-lg p-[3px] w-[50px] h-6 text-center m-auto flex justify-center items-center hover:shadow-xl hover:border-[#0067ff]">Green</button>
                            <button className="border-gray-400 border-[1px] text-[12px] text-black rounded-lg p-[3px] w-[50px] h-6 text-center m-auto flex justify-center items-center hover:shadow-xl hover:border-[#0067ff]">Grey</button>
                            <button className="border-gray-400 border-[1px] text-[12px] text-black rounded-lg p-[3px] w-[50px] h-6 text-center m-auto flex justify-center items-center hover:shadow-xl hover:border-[#0067ff]">Violet</button>
                        </div>
                        <p className="font-bold text-xs text-center">Color : Green</p>
                        <div className="flex gap-3 justify-center items-center">
                            <Image src={model} alt="img" height={20} width={40} className="rounded-md hover:shadow-lg cursor-pointer  border-gray-500 border-[1px] hover:border-[#0067ff] hover:scale-105" />
                            <Image src={model2} alt="img" height={20} width={40} className="rounded-md hover:shadow-lg cursor-pointer border-gray-500 border-[1px] hover:border-[#0067ff] hover:scale-105" />
                            <Image src={model3} alt="img" height={20} width={40} className="rounded-md hover:shadow-lg cursor-pointer border-gray-500 border-[1px] hover:border-[#0067ff] hover:scale-105" />
                            <Image src={model4} alt="img" height={20} width={40} className="rounded-md hover:shadow-lg cursor-pointer border-gray-500 border-[1px] hover:border-[#0067ff] hover:scale-105" />
                            <Image src={model5} alt="img" height={20} width={40} className="rounded-md hover:shadow-lg cursor-pointer border-gray-500 border-[1px] hover:border-[#0067ff] hover:scale-105" />
                        </div>
                        <p className="text-sm font-medium text-black mt-1 text-center">Size : XS</p>
                        <div className="flex gap-2">
                            <button className="border-gray-400 border-[1px] rounded-lg p-[3px] w-9 h-6 text-center m-auto flex justify-center items-center hover:shadow-xl hover:border-[#0067ff]">XS</button>
                            <button className="border-gray-400 border-[1px] rounded-lg p-[3px] w-9 h-6 text-center m-auto flex justify-center items-center hover:shadow-xl hover:border-[#0067ff]">S</button>
                            <button className="border-gray-400 border-[1px] rounded-lg p-[3px] w-9 h-6 text-center m-auto flex justify-center items-center hover:shadow-xl hover:border-[#0067ff]">M</button>
                            <button className="border-gray-400 border-[1px] rounded-lg p-[3px] w-9 h-6 text-center m-auto flex justify-center items-center hover:shadow-xl hover:border-[#0067ff]">XL</button>
                        </div>
                        <Button className=" bg-[#0067ff] rounded-full text-white hover:transition-all hover:ease-in hover:1.2s hover:bg-black hover:text-white "
                            onMouseEnter={() => setIsHoveredIcon(true)}
                            onMouseLeave={() => setIsHoveredIcon(false)}

                        >
                            {isHoveredIcon ? <IoBagHandleOutline className="w-24" size={20} /> : null}
                            {isHoveredIcon ? null : 'Add to Cart'}


                        </Button>
                        {/* <button className=" bg-gray-300 p-3 rounded-full uppercase font-medium text-[12px] "> Subscribe & save 25% </button> */}
                    </div>
                </div>
            </Card>
        </div>
    );
}
