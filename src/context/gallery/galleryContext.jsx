import { useReducer, createContext } from "react";
import galleryReducer from "./galleryReducer";

const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const inititalState = {
    bool: false,
  };

  const [state, dispatch] = useReducer(galleryReducer, inititalState);

  return (
    <GalleryContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryContext;
