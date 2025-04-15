import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { ProgramProvider } from "./Store/Program_Store";

const App = () => {
  return (
    <ProgramProvider>
      {/* Main Application Structure */}
      {/* Header and Main components */}
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Header />
        <Main />
      </div>
    </ProgramProvider>
  );
};

export default App;
