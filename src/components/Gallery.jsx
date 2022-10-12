import { useState } from "react";
import { sliderData } from "../mockData/sliderData";

const Gallery = ({ handleOpen }) => {
  const [clicked, setClicked] = useState(0);

  const handleSlide = (e) => {
    if (e.target.id === "one") setClicked(0);
    if (e.target.id === "two") setClicked(1);
    if (e.target.id === "three") setClicked(2);
    if (e.target.id === "four") setClicked(3);
  };

  return (
    <>
      <section className="hidden md:block h-screen mt-20 mx-auto absolute top-0 left-0 bottom-0 right-0 w-1/3  z-50">
        {/* <img
          src={close}
          className="mb-5 mr-3 cursor-pointer fill-very-dark-blue"
          alt=""
          onClick={handleOpen}
        /> */}
        <div className="relative">
          <svg
            onClick={handleOpen}
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-5 mr-3 cursor-pointer fill-very-dark-blue absolute right-0"
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="white"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <img
          src={sliderData[clicked].image}
          alt=""
          className="rounded-2xl mt-10"
        />
        <div className="flex justify-around mt-7">
          {sliderData.map((item, i) => (
            <div key={i} className="relative">
              <img
                className={`w-16  h-16  rounded-xl cursor-pointer ${
                  clicked === i ? "ring-orange ring-2 " : ""
                }`}
                id={
                  i === 0 ? "one" : i === 1 ? "two" : i === 2 ? "three" : "four"
                }
                onClick={handleSlide}
                src={item.thumbnail}
                alt=""
              />
              {clicked === i && (
                <div className="absolute bg-white opacity-60 top-0 left-0 w-full h-full rounded-xl" />
              )}
            </div>
          ))}
        </div>
      </section>
      <div className=" bg-black opacity-75 z-30 fixed w-full h-full top-0 left-0 right-0" />
    </>
  );
};

export default Gallery;
