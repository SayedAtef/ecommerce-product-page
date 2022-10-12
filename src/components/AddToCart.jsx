import { useContext } from "react";
import CartContext from "../context/cart/cartContext";
import cartIcon from "../assets/images/icon-cart.svg";
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";

const AddToCart = () => {
  const { cart, dispatch } = useContext(CartContext);
  console.log(cart.amount);

  const addItem = () => {
    dispatch({ type: "ADD_ITEM" });
  };
  const removeItem = () => {
    dispatch({ type: "REMOVE_ITEM" });
  };
  return (
    <div className="m-5 md:flex md:justify-between">
      <div className="bg-light-grayish-blue p-4 flex justify-between md:w-1/2 md:mr-4 md:p-3 md:h-16 rounded-xl mt-5 mb-5">
        {cart.amount > 0 && (
          <img
            onClick={removeItem}
            src={minus}
            alt="plus"
            className="w-3 h-1 self-center cursor-pointer"
          />
        )}
        {cart.amount <= 0 && (
          <img
            src={minus}
            alt="plus"
            className="w-3 h-1 self-center cursor-pointer"
          />
        )}
        <p className="md:self-center">{cart.amount}</p>
        <img
          onClick={addItem}
          src={plus}
          alt="plus"
          className="w-3 h-3 self-center cursor-pointer"
        />
      </div>
      <button className="flex justify-center w-full md:w-1/2 bg-orange p-5 md:p-3 md:h-16 md:self-center rounded-xl">
        {/* <img src={cartIcon} alt="cart" className="mr-5 w-5 h-5 self-center" /> */}
        <svg
          width="22"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-5 w-5 h-5 self-center"
        >
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="white"
            fill-rule="nonzero"
          />
        </svg>
        <p className="text-white md:self-center md:ml-4">Add to cart</p>
      </button>
    </div>
  );
};

export default AddToCart;
