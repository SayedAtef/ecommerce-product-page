import { useContext } from "react";
import CartContext from "../context/cart/cartContext";
import remove from "../assets/images/icon-delete.svg";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="absolute z-50 bg-white w-[345px] mt-8 p-3 h-64 rounded-xl md:absolute md:top-10 md:right-16 md:shadow-2xl">
      <h1 className="font-bold m-5">Cart</h1>
      <hr className=" text-grayish-blue" />
      {cart.amount > 0 && (
        <>
          <div className="flex justify-between mt-5">
            <img
              src="image-product-1-thumbnail.jpg"
              alt="product-thumbnail"
              className="w-16 h-16"
            />
            <div className="self-center text-dark-grayish-blue">
              <p>Autumn Limited Edition...</p>
              <p className="font-thin">
                $125.00 x {cart.amount}{" "}
                <span className="font-bold text-very-dark-blue">
                  ${cart.amount * 125}.00
                </span>
              </p>
            </div>
            <img src={remove} alt="delete" className="w-4 h-5 self-center" />
          </div>
          <button className="w-full bg-orange text-white mt-5 rounded-lg font-bold py-4">
            Checkout
          </button>
        </>
      )}
      {cart.amount <= 0 && (
        <p className="text-center mt-[70px] self-center text-dark-grayish-blue font-bold">
          Your cart is empty.
        </p>
      )}
    </div>
  );
};

export default Cart;
