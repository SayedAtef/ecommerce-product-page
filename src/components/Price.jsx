const Price = () => {
  return (
    <div className="flex justify-between md:block md:mt-5 mx-5 mt-4 mb-5">
      <h1 className="text-3xl font-[700] text-very-dark-blue">
        $125.00{" "}
        <span className="text-orange text-xl py-1 px-3 ml-3 rounded bg-pale-orange">
          50%
        </span>
      </h1>
      <p className="text-grayish-blue self-center md:mt-5 text-lg line-through">
        $250.00
      </p>
    </div>
  );
};

export default Price;
