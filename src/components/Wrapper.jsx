import { useContext } from "react";
import GalleryContext from "../context/gallery/galleryContext";
import {
  Navbar,
  AddToCart,
  MainContent,
  Price,
  Slider,
  Gallery,
} from "./index";

const Wrapper = () => {
  const { bool, dispatch } = useContext(GalleryContext);

  const handleOpen = () => {
    dispatch({ type: "CHANGE" });
  };
  return (
    <div className="md:mx-20 relative">
      {bool && <Gallery handleOpen={handleOpen} />}
      <Navbar />
      <div className="md:flex md:justify-between md:mx-20">
        <Slider handleOpen={handleOpen} />
        <div className="md:ml-10 md:mt-24">
          <MainContent />
          <Price />
          <AddToCart />
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
