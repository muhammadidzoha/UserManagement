import React from "react";

const DateTime = () => {
  return (
    <div className="basis-[200px] bg-[#BCFFEF] drop-shadow-customShadow flex rounded-[10px]">
      <div className="bg-[#0BEEB7] rounded-tl-[10px] rounded-bl-[10px] text-white flex">
        <div className="flex flex-col justify-center w-[70px]">
          <p className="text-xs ml-[10px]">Dec</p>
          <h1 className="text-2xl self-center my-[8px]">5</h1>
          <p className="text-xs ml-[10px]">2022</p>
        </div>
      </div>
      <div className="flex flex-col justify-center w-[130px]">
        <p className="text-xs ml-[10px]">Monday</p>
        <h1 className="text-lg self-center my-[8px]">
          10:00:00 <span className="text-sm">AM</span>
        </h1>
        <p className="text-xs ml-[10px]">WIB</p>
      </div>
    </div>
  );
};

export default DateTime;
