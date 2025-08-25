import React, { createContext, useState, useReducer, useEffect } from "react";

import { db, auth } from "../config/firebase"; 
import { onAuthStateChanged } from "firebase/auth"; 
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

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

// ✅ Default static programs
const defaultPrograms = [
  {
    id: "mc-1",
    typeId: 1,
    title: "LED Blink",
    desc: "Basic microcontroller program to blink LED",
    program: `void setup(){ pinMode(13, OUTPUT); } 
void loop(){ digitalWrite(13,HIGH); delay(1000); digitalWrite(13,LOW); delay(1000);} `,
    lastUpdated: new Date().toISOString(),
  },
  {
    id: "latex-1",
    typeId: 2,
    title: "Basic LaTeX Document",
    desc: "Minimal LaTeX structure",
    program: `\\documentclass{article}
\\begin{document}
Hello, Lab Management!
\\end{document}`,
    lastUpdated: new Date().toISOString(),
  },
  {
    id: "ada-1",
    typeId: 3,
    title: "Binary Search",
    desc: "Algorithm Design using ADA",
    program: `procedure Binary_Search is
   type Int_Array is array (1..10) of Integer;
   -- Implementation here
end Binary_Search;`,
    lastUpdated: new Date().toISOString(),
  },
];

const storeReducer = (storeItem, action) => {
  let newStoreItems = storeItem;
  if (action.type === "INITIAL_LOAD") {
    return action.payload; 
  } else if (action.type === "ADD") {
    newStoreItems = [
      ...storeItem,
      {
        typeId: action.payload.typeId,
        title: action.payload.title,
        desc: action.payload.desc,
        program: action.payload.program,
        id: Math.random().toString(),
        lastUpdated: new Date().toISOString(),
      },
    ];
  } else if (action.type === "DELETE") {
    newStoreItems = storeItem.filter((item) => item.id !== action.payload.id);
  } else if (action.type === "UPDATE") {
    newStoreItems = storeItem.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...action.payload,
          lastUpdated: new Date().toISOString(),
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

  const [storeItems, dispatch] = useReducer(storeReducer, []);

  const categories = [
    { id: 1, name: "MC", description: "Microcontroller Lab Programs" },
    { id: 2, name: "Latex", description: "Latex Lab Programs" },
    { id: 3, name: "Ada", description: "Algorithm Design & Analysis Programs" },
  ];

  // 🔁 Load login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLogin(!!user);
    });
    return () => unsubscribe();
  }, []);

  // 🔁 Load programs (Firebase or defaults)
  useEffect(() => {
    const getItems = async () => {
      try {
        const itemsCollectionRef = collection(db, "programs");
        const itemsSnapshot = await getDocs(itemsCollectionRef);
        const itemsList = itemsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (itemsList.length > 0) {
          dispatch({ type: "INITIAL_LOAD", payload: itemsList });
        } else {
          // ✅ Use default static programs if DB is empty
          dispatch({ type: "INITIAL_LOAD", payload: defaultPrograms });
        }
      } catch (error) {
        console.log(error, "Error fetching items, loading defaults instead");
        dispatch({ type: "INITIAL_LOAD", payload: defaultPrograms });
      }
    };

    getItems();
  }, []);

  const addStoreItem = async (categoryId, itemTitle, itemProgram, itemDesc) => {
    try {
      const itemsCollectionRef = collection(db, "programs");
      await addDoc(itemsCollectionRef, {
        typeId: categoryId,
        title: itemTitle,
        program: itemProgram,
        desc: itemDesc,
        lastUpdated: new Date().toISOString(),
      });
      dispatch({
        type: "ADD",
        payload: {
          typeId: categoryId,
          title: itemTitle,
          program: itemProgram,
          desc: itemDesc,
          id: Math.random().toString(),
          lastUpdated: new Date().toISOString(),
        },
      });
    } catch (error) {
      console.log(error, "Error adding item");
    }
  };

  const deleteStoreItem = async (programId) => {
    try {
      await deleteDoc(doc(db, "programs", programId));
      dispatch({ type: "DELETE", payload: { id: programId } });
    } catch (error) {
      console.log(error, "Error deleting item");
    }
  };

  const updateStoreItem = async (updatedItem) => {
    try {
      const itemRef = doc(db, "programs", updatedItem.id);
      const updatedData = {
        typeId: updatedItem.typeId,
        title: updatedItem.title,
        program: updatedItem.program,
        desc: updatedItem.desc,
        lastUpdated: new Date().toISOString(),
      };
      await updateDoc(itemRef, updatedData);
      dispatch({
        type: "UPDATE",
        payload: { ...updatedItem, lastUpdated: updatedData.lastUpdated },
      });
    } catch (error) {
      console.log("Error updating item:", error);
    }
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
