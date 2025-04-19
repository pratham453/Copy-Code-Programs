import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";
import Controls from "./Controls";

const Program = ({ id, title, description, code ,category}) => {
  const [open, setOpen] = useState(false);

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
    <div className="flex flex-col gap-2 border rounded p-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full p-2">
        <h3 className="text-2xl font-semibold ">{title}</h3>
        <div className="flex gap-2 sm:gap-4 mt-2 sm:mt-0">
          <Controls code={code} programId={id} category={category}/>
        </div>
      </div>
      <div className="p-2">
        <p
          className={`transition-all cursor-pointer ${
            open ? "max-h-full" : "max-h-[50px] overflow-hidden"
          }`}
          onClick={toggleDescription}
        >
          {description}
        </p>
        <div className="text-center bg-red-200 float-right p-2 rounded mt-2">
          <h4 className="flex items-center justify-center gap-x-4 text-[15px]">
            <SlCalender />
            {formattedDate}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Program;