import "./InputStyle.css";

export default function Input() {
  return (
    <div className="blurred-overlay">
      <div className="bg-red-300 w-[90%] fixed left-[50%] top-[50%] h-[80%]  text-2xl font-bold text-white -translate-x-1/2 -translate-y-1/2 z-10 rounded p-10 ">
        <div className="flex gap-x-10 items-center w-full ">
          <input
            type="text"
            placeholder="Title"
            className="border-1 w-[80%] rounded px-5 outline-none"
          />
          <button className="bg-blue-500 px-10 rounded hover:bg-blue-800 focus:ring-1 focus:ring-black">
            Post
          </button>
        </div>

        {/* Copy Button & Color Balls Section */}
        <div className="w-full flex flex-col items-start relative rounded bg-opacity-10 border border-[#000a30] backdrop-blur-2xl mt-2">
          <div className="w-full flex items-center justify-between px-4 py-2 border-b border-[#000a30]">
            {/* Color Balls */}
            <div className="flex gap-x-[6px] items-center select-none">
              <div className="w-[13px] h-[13px] rounded-full bg-[rgb(255,95,87)]" />
              <div className="w-[13px] h-[13px] rounded-full bg-[rgb(254,188,46)]" />
              <div className="w-[13px] h-[13px] rounded-full bg-[rgb(45,200,66)]" />
            </div>

            {/* Copy Button */}
          </div>
        </div>
      </div>
    </div>
  );
}
