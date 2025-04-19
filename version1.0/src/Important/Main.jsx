import React, { useState, useContext, useEffect } from "react";
import { ProgramContext } from "../Store/StoreContext";
import { IoIosAdd } from "react-icons/io";
import ProgramCard from "../Components/ProgramCard";
import Input from "../Components/Input";

export default function Main() {
  const [id, setId] = useState(1);
  const {
    categories,
    storeItems,
    setOperation,
    setAddCategoryId,
    setPopupContent,
    login
  } = useContext(ProgramContext);

  const selectedCategory = categories.find((cat) => cat.id === id);
  const filteredPrograms = storeItems.filter((program) => program.typeId === id);

  const handleAddProgram = (categoryId) => {
    setOperation("add");
    setAddCategoryId(categoryId);
    setPopupContent(<Input onClose={() => setPopupContent(null)} />);
  };

  const addSection = (
    <button
      className="float-right text-[16px] p-2 border border-[#000a30] hover:bg-gray-200 transition"
      onClick={() => handleAddProgram(id)}
    >
      <IoIosAdd />
    </button>
  );

  // Log storeItems to see if it updates
  useEffect(() => {
    console.log("Main - storeItems updated:", storeItems);
  }, [storeItems]);

  return (
    <div className="main bg-yellow-100  w-full p-2 flex flex-col items-center">
      <h1 className="text-4xl font-bold my-8 ">Lab Programs</h1>
      <div className="w-[90%] bg-gray-800 grid gap-x-2 grid-cols-3 p-2 rounded-full">
        {categories.map((cat) => (
          <div
            className={`text-center p-2 rounded cursor-pointer font-semibold hover:text-gray-800 ${
              id === cat.id ? "bg-yellow-300" : "text-gray-300"
            } hover:bg-yellow-400 transition rounded-full`}
            key={cat.id}
            onClick={() => setId(cat.id)}
          >
            {cat.name}
          </div>
        ))}
      </div>
      <div className="w-[90%] border-1 border-black rounded p-4 mt-4">
        <div>
          {login && addSection}
          <h3 className="text-[20px]">{selectedCategory?.name}</h3>
          <p className="mb-4">
            Explore {selectedCategory?.description} lab programs with full Code.
          </p>
        </div>
        <ProgramCard filteredPrograms={filteredPrograms} />
      </div>
    </div>
  );
}