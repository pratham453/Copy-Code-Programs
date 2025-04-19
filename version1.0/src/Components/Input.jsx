import React, { useContext, useState } from "react";
import Card from "./Card";
import { TiDelete } from "react-icons/ti";
import { ProgramContext } from "../Store/StoreContext";

export default function Input({ programTitle, programCode, onClose }) {
  const { operation, addStoreItem, addCategoryId, updateStoreItem, selectedId } = useContext(ProgramContext);
  const [localTitle, setLocalTitle] = useState(programTitle || "");
  const [localCode, setLocalCode] = useState(programCode || "");

  const handleTitleChange = (event) => {
    setLocalTitle(event.target.value);
  };

  const handleCodeChangeInInput = (code) => {
    setLocalCode(code);
  };

  const handlePost = () => {
    addStoreItem(addCategoryId, localTitle, localCode);
    onClose(null);
  };

  const handleEdit = () => {
    updateStoreItem({ id: selectedId, title: localTitle, program: localCode , typeId:addCategoryId });
    onClose(null);
  };

  const Button = (
    <button
      className="h-[35px] bg-blue-500 px-12 rounded hover:bg-blue-800 focus:ring-1 focus:ring-black"
      onClick={operation === "edit" ? handleEdit : handlePost}
    >
      {operation === "edit" ? "Edit" : "Post"}
    </button>
  );

  return (
    <div className="blurred-overlay">
      <div className="bg-red-300 w-[90%] fixed left-[50%] top-[50%] h-[80%]   text-2xl font-bold text-white -translate-x-1/2 -translate-y-1/2 z-10 rounded p-10 ">
        <div className="fixed right-[5px] top-[5px] cursor-pointer" onClick={onClose}>
          <TiDelete />
        </div>
        <div className="flex gap-x-10 items-center w-full justify-between">
          <div className={`h-[35px] rounded border-1 ${operation === "view" ? "w-full" : "w-[80%]"}`}>
            <input
              type="text"
              placeholder="Title"
              className="w-full h-[100%] px-4 text-[16px] font-mono flex outline-none"
              value={localTitle}
              onChange={handleTitleChange}
              readOnly={operation === "view"}
            />
          </div>
          {operation === "edit" || operation === "add" ? Button : null}
        </div>
        <Card programCode={localCode} handleCode={handleCodeChangeInInput} />
      </div>
    </div>
  );
}