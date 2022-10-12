import { useContext } from "react";
import SidebarContext from "../context/sidebar/sidebarContext";
import close from "../assets/images/icon-close.svg";

const Sidebar = () => {
  const { bool, dispatch } = useContext(SidebarContext);
  console.log(bool);

  return (
    <div className="bg-white w-2/3 h-screen left-0 top-0 absolute z-50">
      <button onClick={() => dispatch({ type: "CHANGE" })} className="m-6">
        <img src={close} alt="" />
      </button>
      <ul className="ml-6 font-bold">
        <li className="my-5">Collections</li>
        <li className="my-5">Men</li>
        <li className="my-5">Women</li>
        <li className="my-5">About</li>
        <li className="my-5">Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
