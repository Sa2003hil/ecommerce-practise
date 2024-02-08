"use client"
import React from 'react'
import { Breadcrumbs } from "@material-tailwind/react";
import './listing.css'
import Sidebar from '@/components/Sidebar/Sidebar';
import { Cards } from '@/components/Cards/Cards';

const Page = () => {
    return (
        <section className='p-20'>
            <div className=''>
                <div className='bg-black py-[30px] px-[45px] mt-10  w-full h-[120px] rounded-2xl'>
                    <p className='text-[20px] font text-white font-semibold ml-2'>Mens Wear</p>
                    <Breadcrumbs className='bg-transparent text-white'>
                        <a href="#" className="opacity-60">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </a>
                        <a href="#" className="opacity-60 text-white">
                            <span>Shop</span>
                        </a>
                        <a href="#" className='text-white'>Mens Wear</a>
                    </Breadcrumbs>
                </div>
                <div>
                    <div className='row flex gap-3 mt-10'>
                        <div className='col-md-2 sticky top-[10px]  h-auto w-[20%] rounded-xl'>
                            <Sidebar />
                        </div>
                        <div className='col-md-10 flex gap-2 flex-wrap'>
                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Page