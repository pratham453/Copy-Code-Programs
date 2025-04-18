import React from "react";

const Balls = () => {
  return (
    <div className="flex gap-x-[6px] items-center select-none">
      <div className="w-[13px] h-[13px] rounded-full bg-[rgb(255,95,87)]" />
      <div className="w-[13px] h-[13px] rounded-full bg-[rgb(254,188,46)]" />
      <div className="w-[13px] h-[13px] rounded-full bg-[rgb(45,200,66)]" />
    </div>
  );
};

export default Balls;
