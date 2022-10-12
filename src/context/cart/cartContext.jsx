import { useReducer, createContext } from "react";
import cartReducer from "./cartReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const inititalState = {
    cart: {
      amount: 0,
    },
  };

  const [state, dispatch] = useReducer(cartReducer, inititalState);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
