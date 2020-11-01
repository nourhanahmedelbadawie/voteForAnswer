import React, { createContext, useReducer } from "react";
import { pdtReducer } from "./reducer";
const initialState = { productItems: [] };

export const Store = createContext();

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pdtReducer, initialState);

  const increaseProduct = (payload) => {
    dispatch({ type: "increaseProduct", payload });
  };
  const decreaseProduct = (payload) => {
    dispatch({ type: "decreaseProduct", payload });
  };

  const addProduct = (payload) => {
    dispatch({ type: "addProduct", payload });
  };

  const removeProduct = (payload) => {
    dispatch({ type: "removeProduct", payload });
  };

  const Values = {
    removeProduct,
    addProduct,
    increaseProduct,
    decreaseProduct,

    ...state,
  };

  return <Store.Provider value={Values}>{children}</Store.Provider>;
};

export default StateProvider;
