import React from 'react';
import { FaLaptop } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi2";
import { FaMobileAlt } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdOutlineSmartToy } from "react-icons/md";
import { GiConsoleController } from "react-icons/gi";
import { MdOutlineSpeaker } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import { TbDrone } from "react-icons/tb";


const Category = () => {
  return (
    <div className='bg-slate-100 ml-6 w-60 rounded-lg shadow-2xl'>
    <div>
   <table>
  <tr className='h-12 cursor-pointer '>
    <td className='w-16 text-2xl'><FaLaptop className='text-blue-600' /></td>
    <td className='w-32'><h4 className='text-lg text-center '>Laptops</h4></td>
    <td className='w-12'><HiChevronRight className='float-right ' /></td>
  </tr>
  <tr className='h-12 cursor-pointe'>
    <td className='w-16 text-2xl'><FaMobileAlt className='text-blue-600' /></td>
    <td className='w-32'><h4 className='text-lg  text-center  '>Smartphones</h4></td>
    <td className='w-12'><HiChevronRight className='float-right ' /></td>
  </tr>
  <tr className='h-12 cursor-pointer'>
    <td className='w-16 text-2xl'><FaComputer className='text-blue-600' /></td>
    <td className='w-32'><h4 className='text-lg  text-center'>Computers</h4></td>
    <td className='w-12'><HiChevronRight className='float-right ' /></td>
  </tr>
  <tr className='h-12 cursor-pointer'>
    <td className='w-16 text-2xl'><FaHome  className='text-blue-600' /></td>
    <td className='w-32'><h4 className='text-lg  text-center'>Home</h4></td>
    <td className='w-12'><HiChevronRight className='float-right ' /></td>
  </tr>
  <tr className='h-12 cursor-pointer'>
    <td className='w-16 text-2xl'><MdOutlineSmartToy  className='text-blue-600' /></td>
    <td className='w-32'><h4 className='text-lg  text-center'>Toys</h4></td>
    <td className='w-12'><HiChevronRight className='float-right ' /></td>
  </tr>
  <tr className='h-12 cursor-pointer'>
    <td className='w-16 text-2xl'><GiConsoleController className='text-blue-600' /></td>
    <td className='w-32'><h4 className='text-lg  text-center'>Consoles</h4></td>
    <td className='w-12'><HiChevronRight className='float-right ' /></td>
  </tr>
  <tr className='h-12 cursor-pointer'>
    <td className='w-16 text-2xl'><MdOutlineSpeaker  className='text-blue-600' /></td>
    <td className='w-32'><h4 className='text-lg  text-center'>Speakers</h4></td>
    <td className='w-12'><HiChevronRight className='float-right ' /></td>
  </tr>
  <tr className='h-12 cursor-pointer'>
    <td className='w-16 text-2xl'><FaMusic  className='text-blue-600' /></td>
    <td className='w-32'><h4 className='text-lg  text-center'>Musics</h4></td>
    <td className='w-12'><HiChevronRight className='float-right ' /></td>
  </tr>
  <tr className='h-12 cursor-pointer'>
    <td className='w-16 text-2xl'><TbDrone  className='text-blue-600' /></td>
    <td className='w-32'><h4 className='text-lg  text-center'>Drones</h4></td>
    <td className='w-12'><HiChevronRight className='float-right ' /></td>
  </tr>
   </table>
        </div>
    </div>
  )
}

export default Category