import { createContext, useReducer } from "react";

export const DataProvider = createContext();

export default function DataContextProvider({ children }) {
  function trigerStateChange(state, action) {
    switch (action.type) {
      case "destination":
        return { ...state, destination: action.payload };
      case "crew":
        return{...state, crew: action.payload}
      case 'technology':
        return {...state, technology:action.payload}
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(trigerStateChange, {
    destination: [], crew:[], technology:[]
  });

  return (
    <DataProvider.Provider value={{ ...state, dispatch }}>
      {children}
    </DataProvider.Provider>
  );
}
