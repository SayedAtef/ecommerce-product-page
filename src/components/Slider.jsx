import { useState } from "react";
import { sliderData } from "../mockData/sliderData";
import next from "../assets/images/icon-next.svg";
import previous from "../assets/images/icon-previous.svg";

const Slider = ({ handleOpen }) => {
  const [current, setCurrent] = useState(0);
  const [clicked, setClicked] = useState(0);

  const length = sliderData.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const handleSlide = (e) => {
    if (e.target.id === "one") setClicked(0);
    if (e.target.id === "two") setClicked(1);
    if (e.target.id === "three") setClicked(2);
    if (e.target.id === "four") setClicked(3);
  };

  return (
    <>
      <section className="relative md:hidden">
        <img
          className="absolute cursor-pointer z-10 bg-white p-3 w-8 h-8 rounded-full right-3 top-1/2"
          src={next}
          alt="next"
          onClick={nextSlide}
        />
        <img
          className="absolute cursor-pointer z-10 bg-white p-3 w-8 h-8 rounded-full left-3 top-1/2"
          src={previous}
          alt="previous"
          onClick={prevSlide}
        />
        <div className="relative flex flex-row justify-center items-center">
          {sliderData.map((d, i) => (
            <div key={i}>
              {i === current && (
                <img src={d.image} className="h-72 w-screen object-cover" />
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="hidden md:block mt-16 items-center">
        <img
          onClick={handleOpen}
          src={sliderData[clicked].image}
          alt=""
          className="rounded-2xl h-2/3   cursor-pointer "
        />
        <div className="flex justify-first gap-8 mt-5 ">
          {sliderData.map((item, i) => (
            <div key={i} className="relative">
              <img
                className={`w-20 h-20  rounded-2xl cursor-pointer  ${
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
                <div className="absolute cursor-pointer bg-white opacity-60 top-0 left-0 w-full h-full rounded-2xl" />
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Slider;
