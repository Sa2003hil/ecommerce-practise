import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";

const Select = ({ data, placeholder }) => {
    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(placeholder);

    const openSelect = () => {
        setIsOpenSelect(!isOpenSelect);
    }

    const closeSelect = () => {
        setIsOpenSelect(false);
    }

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        closeSelect();
    }

    return (
        <div className='w-100 flex flex-col gap-4 h-100  left-0 absolute p-2 '>
            <div className='w-[10vw] flex items-start justify-start gap-3'>
                <button className='font-normal' onClick={openSelect}>{selectedCategory}</button>
                <div className='mt-1' onClick={openSelect}>
                    <FaAngleDown />
                </div>
            </div>

            {isOpenSelect && (
                <div className='bg-white shadow-lg p-2'>
                    <input type="text" placeholder='Search here' className='shadow-md border-solid border-[1px] rounded-lg border-black p-2' />
                    <ul className='list-none cursor-pointer w-full p-0 m-0 overflow-y-auto mt-5 max-h-52'>
                        {data && data.map((item, index) => (
                            <li key={index} className="p-2 hover:bg-green-300 rounded-lg" onClick={() => handleCategorySelect(item)}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Select;
