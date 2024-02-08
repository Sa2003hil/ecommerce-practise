"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import logo from '../../assets/images/header-logo.svg';
import Select from '../Select/Select';
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import axios from 'axios'

const Index = ({ data }) => {
    const [categories, setCategories] = useState([
        'Electronics',
        'Home',
        'Stationary',
        'Books',
        'Food',
        'Others'
    ]);


    const countryList = [];

    useEffect(() => {
        getCountry('https://countriesnow.space/api/v0.1/countries/')
    }, [])

    const getCountry = async (url) => {
        try {
            await axios.get(url).then((res) => {
                // res.data.data.forEach((country) => {
                //     countryList.push(country.name)
                // })
                if (res != null) {

                    console.log("dsta", res.data.data);
                    res.data.data.map((item, index) => {
                        countryList.push(item.country);
                        console.log(item.country);
                    })
                }


            })
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className='flex gap-20 '>
            <div className='items-center flex justify-center'>
                <Image alt='' src={logo} height={100} width={100} />
            </div>
            <div className='flex'>
                <div className='col-sm-2 flex gap-3 border-gray-400 border-solid border-[1px] rounded-md relative'>
                    <div className='items-center justify-center  position-relative'>
                        <div className='absolute top-0'>
                            <Select data={categories} placeholder={'All Categories'} />
                        </div>
                    </div>
                    <div className='flex items-center justify-center m-auto'>
                        <input type="text" className='border-none p-2 w-80 ml-32 outline-none' placeholder="Search for products" />
                        <IoIosSearch className='mr-3 cursor-pointer' size={20} />
                    </div>
                </div>
            </div>

            <div className='mt-3  '>
                <div className='items-center justify-center  position-relative'>
                    <div className='absolute top-4 border-gray-400 border-[1px] w-[12vw] rounded-xl  h-[60%]'>
                        <Select data={countryList} placeholder={'Location'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
