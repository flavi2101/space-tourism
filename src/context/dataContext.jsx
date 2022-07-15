import { createContext, useReducer } from "react";

export const DataProvider = createContext();

export default function DataContextProvider({ children }) {
  function trigerStateChange(state, action) {
    switch (action.type) {
      case "destination":
        return { ...state, destination: action.payload };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(trigerStateChange, {
    destination: [],
  });

  return (
    <DataProvider.Provider value={{ ...state, dispatch }}>
      {children}
    </DataProvider.Provider>
  );
}
