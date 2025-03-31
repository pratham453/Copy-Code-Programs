import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { LuCopy } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";

const Program = ({ title, description }) => {
  const [open, setOpen] = useState(false);

  const handleView = () => setOpen(prev => !prev);

  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <div className='flex flex-col gap-2 border rounded p-2'>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full p-2">
        <h3 className="text-2xl font-semibold ">{title}</h3>

        {/* Controls */}
        <div className="flex gap-2 sm:gap-4 mt-2 sm:mt-0">
          <button className="text-[16px] p-2 border border-[#000a30] hover:bg-gray-200 transition">
            <CiEdit />
          </button>
          <button className="text-[16px] p-2 border border-[#000a30] hover:bg-red-200 transition">
            <RiDeleteBin5Line />
          </button>
          <button
            className="text-[16px] p-2 border border-[#000a30] hover:bg-blue-200 transition"
            onClick={handleView}
          >
            {open ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
          <button className="text-[16px] p-2 border border-[#000a30] hover:bg-green-200 transition">
            <LuCopy />
          </button>
        </div>
      </div>

      {/* Description Section */}
      <div className='p-2'>
        <p className={`transition-all ${open ? 'max-h-full' : 'max-h-[50px] overflow-hidden'}`}>
          {description}
        </p>

        {/* Date */}
        <div className='text-center bg-red-200 float-right p-2 rounded mt-2'>
          <h4 className='flex items-center justify-center gap-x-4 text-[15px]'>
            <SlCalender />
            {formattedDate}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Program;
