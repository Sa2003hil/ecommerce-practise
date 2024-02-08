"use client"
import React, { useState } from 'react';
import Image from "next/image";
import logo from '../../assets/images/header-logo.svg';
import Select from '../Select/Select';
import { IoIosSearch } from "react-icons/io";

const Index = () => {
    const [categories, setCategories] = useState([
        'All Categories',
        'Electronics',
        'Home',
        'Stationary',
        'Books',
        'Food',
        'Others'
    ]);

    return (
        <div className='flex gap-20'>
            <div className='items-center flex justify-center'>
                <Image alt='' src={logo} height={100} width={100} />
            </div>
            <div className='flex'>
                <div className='col-sm-2 flex gap-3 border-gray-400 border-solid border-[1px] rounded-md relative'>
                    <div className='items-center justify-center  position-relative'>
                        <div className='absolute top-0'>
                            <Select data={categories} />
                        </div>
                    </div>
                    <div className='flex items-center justify-center m-auto'>
                        <input type="text" className='border-none p-2 w-80 ml-32 outline-none' placeholder="Search for products" />
                        <IoIosSearch className='mr-3 cursor-pointer' size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
