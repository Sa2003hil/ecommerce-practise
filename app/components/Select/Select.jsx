"use client"
import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";

const Select = () => {
    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const openSelect = () => {
        setIsOpenSelect(!isOpenSelect);
    }
    return (
        <div className='w-100 flex flex-col gap-4 h-100 top-2 left-0 absolute p-4 '>
            <div className='w-[20vw] flex items-start justify-start gap-3'>
                <button className='font-normal' onClick={openSelect}>All Categories</button>
                <div className='mt-1' onClick={openSelect}>
                    <FaAngleDown />
                </div>
            </div>

            {isOpenSelect === true &&
                <div className='bg-white shadow-lg p-2'>
                    <input type="text" placeholder='Search here' className=' shadow-md  border-solid border-[1px] rounded-lg border-black p-2 ' />
                    <ul className='list-none cursor-pointer w-full p-0 m-0 overflow-y-auto mt-5 max-h-52'>
                        <li className="p-2 hover:bg-green-300 rounded-lg ">Electronics</li>
                        <li className="p-2 hover:bg-green-300 rounded-lg ">Home</li>
                        <li className="p-2 hover:bg-green-300 rounded-lg ">Stationary</li>
                        <li className="p-2 hover:bg-green-300 rounded-lg ">Books</li>
                        <li className="p-2 hover:bg-green-300 rounded-lg ">Food</li>
                        <li className="p-2 hover:bg-green-300 rounded-lg ">Others</li>
                        <li className="p-2 hover:bg-green-300 rounded-lg ">Stationary</li>
                        <li className="p-2 hover:bg-green-300 rounded-lg ">Books</li>
                        <li className="p-2 hover:bg-green-300 rounded-lg ">Food</li>
                        <li className="p-2 hover:bg-green-300 rounded-lg ">Others</li>
                        <li className="p-2 hover:bg-green-300 rounded-lg ">Stationary</li>
                        <li className="p-2 hover:bg-green-300 rounded-lg ">Books</li>
                        <li className="p-2 hover:bg-green-300 rounded-lg ">Food</li>
                        <li className="p-2 hover:bg-green-300 rounded-lg ">Others</li>
                    </ul>
                </div>

            }



        </div>
    );
};

export default Select;
