import React, { useContext } from "react";
import { ProgramContext } from "../Store/StoreContext";
import LoginCard from "../Sections/LoginCard";
const Header = () => {
  const { login , setPopupContent ,setLogin} = useContext(ProgramContext)
  const handleClick = ()=>{
    if(!login) setPopupContent(<LoginCard/>)
    else if(login) setLogin(false)
  }
  return (
    <>
      <header className="bg-red-500 flex items-center justify-between p-6 px-8 text-white shadow-md">
        <h1 className="text-2xl font-semibold tracking-tight">Programs Repo</h1>
        <button className="bg-white text-red-500 font-semibold py-2 px-10 rounded-sm hover:bg-red-100 focus:outline-none focus-ring-2 focus-ring-red-300 transition duration-200" onClick={handleClick}>
          {login ? "logout" : "Login"}
        </button>
      </header>
    </>
  );
};

export default Header;
