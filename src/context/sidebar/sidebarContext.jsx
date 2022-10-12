import { useReducer, createContext } from "react";
import sidebarReducer from "./sidebarReducer";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const inititalState = {
    bool: false,
  };

  const [state, dispatch] = useReducer(sidebarReducer, inititalState);

  return (
    <SidebarContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
