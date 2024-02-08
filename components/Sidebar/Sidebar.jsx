import React from 'react'
import Image from 'next/image'
import Tshirt from '../../assets/images/asset 50.png'
import Jeasn from '../../assets/images/asset 69.png'
import Hoodies from '../../assets/images/asset 16.png'
import Jacket from '../../assets/images/asset 35.png'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { Checkbox } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";


const Sidebar = () => {
    function valuetext(value) {
        return `${value}°C`;
    }
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className='bg-white h-auto'>
            <div className='shadow-md rounded-lg border-none p-[25px] '>
                <p className='font-medium text-lg text-gray-900 '>Category</p>


                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className=' flex gap-8 p-2 mt-3 hover:transition hover:bg- hover:ease-in cursor-pointer hover:scale-90  shadow-lg  border-gray-500 border-[1px] w-full rounded-md'>
                            <span className='text-center'><Image className='rounded-3xl' src={Tshirt} alt='img' width={30} height={30} /></span>
                            <h4 className='ml-3 text-gray-500 font-medium text-lg'>Cargos</h4>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className=' flex hover:transition hover:bg- hover:ease-in cursor-pointer hover:scale-90 gap-8 p-2 mt-3  shadow-lg  border-gray-500 border-[1px] w-full rounded-md'>
                            <span className='text-center'><Image className='rounded-3xl' src={Jacket} alt='img' width={30} height={30} /></span>
                            <h4 className='ml-3 text-gray-500 font-medium text-lg'>Jackets</h4>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className=' flex hover:transition hover:bg- hover:ease-in cursor-pointer hover:scale-90 gap-8 p-2 mt-3  shadow-lg  border-gray-500 border-[1px] w-full rounded-md'>
                            <span className='text-center'><Image className='rounded-3xl' src={Hoodies} alt='img' width={30} height={30} /></span>
                            <h4 className='ml-3 text-gray-500 font-medium text-lg'>Hoodies</h4>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className=' flex hover:transition hover:bg- hover:ease-in cursor-pointer hover:scale-90 gap-8 p-2 mt-3  shadow-lg  border-gray-500 border-[1px] w-full rounded-md'>
                            <span className='text-center'><Image className='rounded-3xl' src={Jeasn} alt='img' width={30} height={30} /></span>
                            <h4 className='ml-3 text-gray-500 font-medium text-lg'>Jeans</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className='shadow-md rounded-lg border-none p-[25px]'>
                <p className='font-medium text-lg text-gray-900 '>Fill by Price</p>

                <Box sx={{ width: 160 }}>
                    <Slider
                        min={0}
                        max={3000}
                        step={1}
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                </Box>

                {/* Filter Range */}
                <div className=' w-[108%] mt-2 pb-2 flex gap-4'>
                    <span className='text-xs'><span className='font-semibold'>From :</span> <strong className='text-green-500'>₹{value[0]}</strong></span>
                    <span className='ml-auto text-xs'><span className='font-semibold'>From :</span> <strong className='text-green-500'>₹{value[1]}</strong></span>
                </div>

                {/* Filter CheckBox */}

                <div className='filter'>
                    <h2>Color</h2>
                    <ul >
                        <li className='flex items-center text-center'><Checkbox defaultChecked />Red(23)</li>
                        <li className='flex items-center text-center'><Checkbox defaultChecked />Blue(10)</li>
                        <li className='flex items-center text-center'><Checkbox defaultChecked />Black(8)</li>
                    </ul>

                </div>
                <div className=' flex items-center justify-center mt-8'>
                    <Button className='bg-green-500'>Filter</Button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar