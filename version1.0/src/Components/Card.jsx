import { useContext, useState } from "react";
import Balls from "./Balls";
import { LuCopy } from "react-icons/lu";
import { ProgramContext } from "../Store/StoreContext";

export default function Card({ programCode, handleCode }) {
  const { operation } = useContext(ProgramContext);
  const [localCode, setLocalCode] = useState(programCode || "");

  const handleCodeChange = (e) => {
    const newValue = e.target.value;
    setLocalCode(newValue);
    handleCode(newValue);
  };

  return (
    <div className="w-full h-[90%] mt-3 border-1 shadow-md rounded-md">
      <div className="w-full bg-green-200 flex items-center justify-between px-4 py-2 border-b rounded-t-md">
        <Balls /> {/* Color Balls */}
      </div>
      {/* Text Area */}
      <div className="w-full h-[calc(100% - 50px)] ">
        {/* Adjusted height calculation */}
        <textarea
          name="content" // Added a name for the textarea
          id="cardContent" // Added an ID for better accessibility and targeting
          placeholder="Write your Program here..."
          rows={15} // Adjusted default rows for better initial view
          className="w-full h-full p-3 text-white font-mono text-sm focus:outline-none resize-none overflow-auto" // Improved styling
          value={localCode} // Use localCode here to control the textarea value
          onChange={handleCodeChange} // Handle text changes // Set default value to programCode prop
          readOnly={operation === "view"}
        ></textarea>
      </div>
    </div>
  );
}