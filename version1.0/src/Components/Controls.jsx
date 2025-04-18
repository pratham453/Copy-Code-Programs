import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { LuCopy } from "react-icons/lu";
import { useContext } from "react";
import { ProgramContext } from "../Store/StoreContext";
import Input from "./Input";

export default function Controls({ code, programId }) {
  const { setSelectedId, setOperation, deleteStoreItem, setPopupContent, storeItems } = useContext(ProgramContext);
  const currentProgram = storeItems.find((item) => item.id === programId);

  const onHandleButton = (index) => {
    setSelectedId(programId);
    if (index === 0) {
      setOperation("edit");
      setPopupContent(
        <Input
          programTitle={currentProgram?.title}
          programCode={currentProgram?.program}
          onClose={() => setPopupContent(null)}
        />
      );
    } else if (index === 1) {
      setOperation("delete");
      deleteStoreItem(programId);
    } else if (index === 2) {
      setOperation("view");
      setPopupContent(
        <Input
          programTitle={currentProgram?.title}
          programCode={currentProgram?.program}
          onClose={() => setPopupContent(null)}
          readOnly={true}
        />
      );
    } else if (index === 3) {
      navigator.clipboard.writeText(`${code}`);
    }
  };

  const icons = [CiEdit, RiDeleteBin5Line, FaRegEye, LuCopy];

  return (
    <>
      {icons.map((Icon, index) => (
        <button
          key={index}
          onClick={() => onHandleButton(index)}
          className="text-[16px] p-2 border border-[#000a30] hover:bg-gray-200 transition"
        >
          <Icon />
        </button>
      ))}
    </>
  );
}