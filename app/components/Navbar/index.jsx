"use client"
import React from 'react'
import Image from "next/image";
import logo from '../../assets/images/header-logo.svg'
import Select from '../Select/Select';
import { IoIosSearch } from "react-icons/io";

const index = () => {
    return (
        <div className='flex gap-20'>
            <div className=' items-center flex justify-center'>
                <Image alt='' src={logo} height={100} width={100} />
            </div>
            <div className='flex'>

                <div className='col-sm-2 flex gap-3 border-gray-400 border-solid border-[1px] rounded-md '>
                    <div className=' items-center justify-center m-auto position-relative'>
                        {/* <p className='text-sm font-medium text-center mt-[1px] ml-2 cursor-pointer '>All Products</p> */}
                        <div className='absolute top-[0px] z-20'>
                            <Select />
                        </div>
                    </div>
                    <div className='flex items-center justify-center m-auto'>
                        <input type="text" className=' border-none ml-52 p-2 w-56 outline-none' placeholder="Search for products" />
                        <IoIosSearch className='mr-3 cursor-pointer' size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index