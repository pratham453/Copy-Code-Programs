import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { LuCopy } from "react-icons/lu";

export default function Controls({ onHandleButton }) {
  const handleButtonClick = (index) => {
    console.log(`Button ${index + 1} clicked!`);
    onHandleButton(index);
  };

  const icons = [
    CiEdit,
    RiDeleteBin5Line,
    FaRegEye,
    LuCopy,
  ];

  return (
    <>
      {icons.map((Icon, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(index)}
          className="text-[16px] p-2 border border-[#000a30] hover:bg-gray-200 transition"
        >
          <Icon />
        </button>
      ))}
    </>
  );
}