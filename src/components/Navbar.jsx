import { useContext, useState } from "react";
import SidebarContext from "../context/sidebar/sidebarContext";
import CartContext from "../context/cart/cartContext";
import menu from "../assets/images/icon-menu.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import { Sidebar, Cart } from "./index";

const menuList = ["Collections", "Men", "Women", "About", "Contact"];

const Navbar = () => {
  const { bool, dispatch } = useContext(SidebarContext);
  const { cart } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const handleCart = () => {
    setOpen(!open);
  };

  return (
    <div className="relative m-4">
      {bool && (
        <div className=" bg-black opacity-75 z-30 fixed w-full h-full top-0 left-0 right-0" />
      )}
      <div className="flex p-4 justify-between relative">
        {bool && <Sidebar />}
        <div className="flex justify-start">
          <button
            onClick={() => dispatch({ type: "CHANGE" })}
            className="md:hidden"
          >
            <img src={menu} alt="menu" className="h-5 w-5 self-center" />
          </button>
          <p className="ml-4 md:text-3xl font-[700] text-very-dark-blue self-center">
            Sneakers
          </p>
          <ul className="hidden md:flex justify-between pt-4 ml-12 text-sm text-dark-grayish-blue">
            {menuList.map((item, i) => (
              <li
                key={i}
                className="px-3 cursor-pointer hover:underline hover:underline-offset-[32px] hover:decoration-orange hover:decoration-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end">
          <button className="relative" onClick={handleCart}>
            {cart.amount > 0 && (
              <p className="absolute bg-orange left-3 rounded-lg px-2 top-0 text-xs text-white">
                {cart.amount}
              </p>
            )}
            <img
              src={cartIcon}
              alt="cart"
              className="h-5 w-5 self-center mr-5 md:h-6 md:w-6 md:mr-12"
            />
          </button>
          <img
            src={avatar}
            alt="avatar"
            className="h-8 w-8 self-center cursor-pointer md:h-12 md:w-12 hover:ring-2 rounded-full hover:ring-orange"
          />
        </div>
      </div>
      <hr className="hidden md:block text-grayish-blue" />
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
