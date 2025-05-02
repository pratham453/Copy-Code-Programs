import React, { createContext, useState, useReducer, useEffect } from "react";

export const ProgramContext = createContext({
  addStoreItem: () => {},
  deleteStoreItem: () => {},
  updateStoreItem: () => {},
  storeItems: [],
  login: false,
  setLogin: () => {},
  popupContent: null,
  setPopupContent: () => {},
  operation: "",
  setOperation: () => {},
  selectedId: null,
  setSelectedId: () => {},
  addCategoryId: null,
  setAddCategoryId: () => {},
});

const initialStoreItems = [
  {
    typeId: 1,
    title: "MC Program 1",
    desc : "Microcontroller Program 1",
    program: "MC Program Code 1",
    id: "1",
    lastUpdated: "2025-04-12T20:43:00.000Z", // Assuming 3 weeks ago was April 11th, 2025 at the current time
  },
  {
    typeId: 2,
    title: "Latex Program 2",
    desc : "Latex Program 2",
    program: "Latex Program Code 2",
    id: "5",
    lastUpdated: "2025-04-11T20:43:00.000Z", // Assuming the same date for the second item
  },
];

const storeReducer = (storeItem, action) => {
  let newStoreItems = storeItem;
  if (action.type === "ADD") {
    newStoreItems = [
      ...storeItem,
      {
        typeId: action.payload.typeId,
        title: action.payload.title,
        desc: action.payload.desc,
        program: action.payload.program,
        id: Math.random().toString(),
        lastUpdated: new Date().toISOString(), // last date when program is being updated
      },
    ];
  } else if (action.type === "DELETE") {
    newStoreItems = storeItem.filter((item) => item.id !== action.payload.id);
  } else if (action.type === "UPDATE") {
    newStoreItems = storeItem.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...action.payload,
          lastUpdated: new Date().toISOString(), // last date when program is being updated
        };
      } else {
        return item;
      }
    });
  }
  return newStoreItems;
};

const StoreContext = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [operation, setOperation] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [addCategoryId, setAddCategoryId] = useState(null);

  const [storeItems, dispatch] = useReducer(storeReducer, initialStoreItems);

  const categories = [
    { id: 1, name: "MC", description: "Microcontroller Lab Programs" },
    { id: 2, name: "Latex", description: "Latex Lab Programs" },
    { id: 3, name: "Ada", description: "Algorithm Design & Analysis Programs" },
  ];

  // 🔁 Load login state from localStorage on mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setLogin(loggedIn);
  }, []);

  // 💾 Save login state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("isLoggedIn", login);
  }, [login]);

  const addStoreItem = (categoryId, itemTitle, itemProgram , itemDesc) => {
    dispatch({
      type: "ADD",
      payload: { typeId: categoryId, title: itemTitle, program: itemProgram , desc : itemDesc},
    });
  };

  const deleteStoreItem = (programId) => {
    dispatch({ type: "DELETE", payload: { id: programId } });
  };

  const updateStoreItem = (updatedItem) => {
    dispatch({ type: "UPDATE", payload: updatedItem });
  };

  return (
    <ProgramContext.Provider
      value={{
        login,
        setLogin,
        popupContent,
        setPopupContent,
        categories,
        operation,
        setOperation,
        setSelectedId,
        selectedId,
        storeItems,
        deleteStoreItem,
        addStoreItem,
        addCategoryId,
        setAddCategoryId,
        updateStoreItem,
      }}
    >
      {children}
    </ProgramContext.Provider>
  );
};

export default StoreContext;