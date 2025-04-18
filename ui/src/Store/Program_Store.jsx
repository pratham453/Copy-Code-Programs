import { createContext, useState } from "react";

export const ProgramContext = createContext();

export const ProgramProvider = ({ children }) => {
  const [popup, setPopup] = useState(false); // State to hold the content of the popup
  const [operation , setOperation] = useState(""); // State to manage the operation (add/edit)
  const [editId , setEditId] = useState(null); // State to manage the ID of the program being edited

  const [login , setLogin] = useState(false); // State to manage login status

  const [programs, setPrograms] = useState([
    {
      id: 1,
      name: "MC",
      title: "Blinking LED",
      description: "A simple program to blink an LED using a microcontroller.",
      code: "// Code for Blinking LED...", // Added a placeholder for code
    },
    {
      id: 2,
      name: "MC",
      title: "PWM Control",
      description: "A program to control the brightness of an LED using PWM.",
      code: "// Code for PWM Control...", // Added a placeholder for code
    },
    {
      id: 3,
      name: "Latex",
      title: "Document Formatting",
      description: "Learn how to format documents using LaTeX.",
      code: "\\documentclass{article}\n\\begin{document}\nHello LaTeX!\n\\end{document}", // Added a placeholder for code
    },
    {
      id: 4,
      name: "Latex",
      title: "Math Equations",
      description: "Using LaTeX for writing mathematical equations.",
      code: "$E=mc^2$", // Added a placeholder for code
    },
    {
      id: 5,
      name: "Ada",
      title: "Dijkstra's Algorithm",
      description: "Implementing Dijkstra's shortest path algorithm.",
      code: "-- Ada code for Dijkstra...", // Added a placeholder for code
    },
    {
      id: 6,
      name: "Ada",
      title: "Knapsack Problem",
      description: "Solving the knapsack problem using dynamic programming.",
      code: "-- Ada code for Knapsack...", // Added a placeholder for code
    },
  ]);

  // Categories and their respective descriptions
  const categories = [
    { id: 1, name: "MC", description: "Microcontroller Lab Programs" },
    { id: 2, name: "Latex", description: "Latex Lab Programs" },
    { id: 3, name: "Ada", description: "Algorithm Design & Analysis Programs" },
  ];

  return (
    <ProgramContext.Provider
      value={{
        programs,
        setPrograms,
        categories,
        popup,
        setPopup,
        setOperation,
        operation ,
        editId , 
        setEditId,
        login,
        setLogin,
      }}
    >
      {children}
    </ProgramContext.Provider>
  );
};