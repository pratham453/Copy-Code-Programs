import { createContext, useState } from "react";

export const ProgramContext = createContext();

export const ProgramProvider = ({ children }) => {
  const [programs, setPrograms] = useState([
    {
      id: 1,
      name: "MC",
      title: "Blinking LED",
      description: "A simple program to blink an LED using a microcontroller.",
    },
    {
      id: 2,
      name: "MC",
      title: "PWM Control",
      description: "A program to control the brightness of an LED using PWM.",
    },
    {
      id: 3,
      name: "Latex",
      title: "Document Formatting",
      description: "Learn how to format documents using LaTeX.",
    },
    {
      id: 4,
      name: "Latex",
      title: "Math Equations",
      description: "Using LaTeX for writing mathematical equations.",
    },
    {
      id: 5,
      name: "Ada",
      title: "Dijkstra's Algorithm",
      description: "Implementing Dijkstra's shortest path algorithm.",
    },
    {
      id: 6,
      name: "Ada",
      title: "Knapsack Problem",
      description: "Solving the knapsack problem using dynamic programming.",
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
      value={{ programs , categories }}
    >
      {children}
    </ProgramContext.Provider>
  );
};
