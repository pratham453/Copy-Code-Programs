import { useContext } from "react";
import "./InputStyle.css";
import Card from "./Popup/Card";
import { TiDelete } from "react-icons/ti";
import { ProgramContext } from "../Store/Program_Store";

export default function Input({ programTitle, programCode }) {
  const { operation , setPopup } = useContext(ProgramContext);

  const Button = (
    <button className="h-[35px] bg-blue-500 px-12 rounded hover:bg-blue-800 focus:ring-1 focus:ring-black">
      {operation === "edit" ? "Edit" : "Post"}
    </button>
  );

  return (
    <div className="blurred-overlay">
      <div className="bg-red-300 w-[90%] fixed left-[50%] top-[50%] h-[80%]  text-2xl font-bold text-white -translate-x-1/2 -translate-y-1/2 z-10 rounded p-10 ">
        <div
          className="fixed right-[5px] top-[5px] cursor-pointer"
          onClick={()=> setPopup(false)}
        >
          <TiDelete />
        </div>
        {/* { input and post button } */}
        <div className="flex gap-x-10 items-center w-full justify-between">
          <div className="h-[35px] w-[80%] rounded  border-1 ">
            <input
              type="text"
              placeholder="Title"
              className="w-full h-[100%] px-4 text-[16px] font-mono flex outline-none"
              value={programTitle}
            />
          </div>
          {operation === "edit" ? Button : null}
        </div>

        {/* Copy Button & Color Balls Section */}
        <Card programCode={programCode} />
      </div>
    </div>
  );
}
