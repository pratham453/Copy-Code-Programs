import React, { useContext, useState } from 'react';

import { SlCalender } from "react-icons/sl";
import { ProgramContext } from '../Store/Program_Store';
import Controls from "./Controls/Controls"

const Program = ({ id, title, description, code }) => {
  const { popup, setPopup, setOperation, setEditId , editId } = useContext(ProgramContext);
  const [open, setOpen] = useState(false);

  const onHandleButton = (index) => {
    setEditId(id)
    if(index === 0 ) {
      setPopup(!popup);
      setOperation("edit")
    }
    else if(index === 1) setOperation("delete")
    else if(index === 2){
      setPopup(!popup);
      setOperation("view")
    } 
    else if(index === 3){
      navigator.clipboard.writeText(`${code}`);
    }
    console.log(editId)
  }

  const toggleDescription = () => {
    setOpen(!open);
  };

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
          <Controls onHandleButton={onHandleButton}/>
        </div>
      </div>

      {/* Description Section */}
      <div className='p-2'>
        <p
          className={`transition-all cursor-pointer ${open ? 'max-h-full' : 'max-h-[50px] overflow-hidden'}`}
          onClick={toggleDescription}
        >
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