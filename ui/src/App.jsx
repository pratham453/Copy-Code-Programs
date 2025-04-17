import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { ProgramProvider } from "./Store/Program_Store";
import Input from "./Components/Input";

const App = () => {
  return (
    <ProgramProvider>
      {/* Main Application Structure */}
      {/* Header and Main components */}
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Header />
        <Main />
        <Input />
      </div>
    </ProgramProvider>
  );
};

export default App;
