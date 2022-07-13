import { createContext } from "react";

var DestinationProvider = createContext();



export default function DestinationContextProvider({ children }) {
  return (<DestinationProvider.Provider >{children}</DestinationProvider.Provider>);
}
