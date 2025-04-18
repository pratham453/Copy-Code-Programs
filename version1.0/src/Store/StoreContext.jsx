import { createContext, useState, useReducer } from "react";

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
  { typeId: 1, title: "MC Program 1", program: "MC Program Code 1", id: "1" },
  { typeId: 2, title: "Latex Program 2", program: "Latex Program Code 1", id: "5" },
];

const storeReducer = (storeItem, action) => {
  let newStoreItems = storeItem;
  if (action.type === "ADD") {
    newStoreItems = [
      ...storeItem,
      { typeId: action.payload.typeId, title: action.payload.title, program: action.payload.program, id: Math.random().toString() },
    ];
  } else if (action.type === "DELETE") {
    newStoreItems = storeItem.filter((item) => item.id !== action.payload.id);
  } else if (action.type === "UPDATE") {
    newStoreItems = storeItem.map((item) =>
      item.id === action.payload.id ? action.payload : item
    );
  }
  return newStoreItems;
};

const StoreContext = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [operation, setOperation] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [addCategoryId, setAddCategoryId] = useState(null);
  const categories = [
    { id: 1, name: "MC", description: "Microcontroller Lab Programs" },
    { id: 2, name: "Latex", description: "Latex Lab Programs" },
    { id: 3, name: "Ada", description: "Algorithm Design & Analysis Programs" },
  ];

  const [storeItems, dispatch] = useReducer(storeReducer, initialStoreItems);

  const addStoreItem = (categoryId, itemTitle, itemProgram) => {
    dispatch({ type: "ADD", payload: { typeId: categoryId, title: itemTitle, program: itemProgram } });
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