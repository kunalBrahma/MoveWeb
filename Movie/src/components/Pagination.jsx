const Pagination = ({ pageNo, handlePrev, handleNext }) => {
  return (
    <div className="text-xl w-full bg-gray-400 p-4 mt-8 flex justify-center items-center text-center">
      <div className="mr-4 cursor-pointer" onClick={handlePrev}>
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className="mx-4">{pageNo}</div>
      <div className="ml-4 cursor-pointer" onClick={handleNext}>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default Pagination;
