import React, { createContext, useState, useReducer, useEffect } from "react";

import { db } from "../config/firebase";
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

const initialStoreItems = []; // Initialize as an empty array

const storeReducer = (storeItem, action) => {
  let newStoreItems = storeItem;
  if (action.type === "INITIAL_LOAD") {
    return action.payload; // Replace the entire store with the fetched items
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

  useEffect(() => {
    const getItems = async () => {
      try {
        const itemsCollectionRef = collection(db, "ItemStore");
        const itemsSnapshot = await getDocs(itemsCollectionRef);
        const itemsList = itemsSnapshot.docs.map((doc) => {
          return {
            id: doc.id, // Get the document ID
            ...doc.data(),
          }; // Get the rest of the data}
        });
        dispatch({ type: "INITIAL_LOAD", payload: itemsList }); // Dispatch an action to load initial data
      } catch (error) {
        console.log(error, "Error fetching items");
      }
    };

    getItems();
  }, []); // Empty dependency array means this runs only once on mount

  const addStoreItem = async (categoryId, itemTitle, itemProgram, itemDesc) => {
    try {
      const itemsCollectionRef = collection(db, "ItemStore");
      await addDoc(itemsCollectionRef, {
        typeId: categoryId,
        title: itemTitle,
        program: itemProgram,
        desc: itemDesc,
        lastUpdated: new Date().toISOString(), // Set the last updated time to now
      });
      dispatch({
        type: "ADD",
        payload: {
          typeId: categoryId,
          title: itemTitle,
          program: itemProgram,
          desc: itemDesc,
          id: Math.random().toString(), // Generate a random ID for the new item
          lastUpdated: new Date().toISOString(), // Set the last updated time to now
        },
      });
    } catch (error) {
      console.log(error, "Error adding item");
    }
  };

  const deleteStoreItem = async (programId) => {
    try {
      await deleteDoc(doc(db, "ItemStore", programId));

      dispatch({ type: "DELETE", payload: { id: programId } });
    } catch (error) {
      console.log(error, "Error deleting item");
    }
  };

  const updateStoreItem = async (updatedItem) => {
    console.log(
      "Attempting to update item with ID:",
      updatedItem.id,
      "Data:",
      updatedItem
    );
    try {
      const itemRef = doc(db, "ItemStore", updatedItem.id);
      const updatedData = {
        typeId: updatedItem.typeId,
        title: updatedItem.title,
        program: updatedItem.program,
        desc: updatedItem.desc,
        lastUpdated: new Date().toISOString(),
      };
      console.log("Updating Firebase with:", updatedData);
      await updateDoc(itemRef, updatedData);
      console.log("Firebase update successful");
      dispatch({
        type: "UPDATE",
        payload: { ...updatedItem, lastUpdated: updatedData.lastUpdated },
      });
      console.log("Dispatched UPDATE action:", {
        ...updatedItem,
        lastUpdated: updatedData.lastUpdated,
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
