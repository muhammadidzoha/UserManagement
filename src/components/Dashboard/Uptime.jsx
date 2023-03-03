import React from "react";

const Uptime = (props) => {
  return (
    <div
      className={`${props.basisUptime} bg-[#C9DFFF] rounded-[10px] flex justify-center`}
    >
      <div className="flex flex-col">
        <p className="text-[10px] text-[#8D8D8D] mt-[8px] mb-[5px]">
          System Uptime
        </p>
        <h1 className="text-[10px] font-semibold">100:59:59:59</h1>
        <p className="text-[10px] text-[#8D8D8D] my-[5px]">Last Uptime</p>
        <h1 className="text-[10px] font-semibold">17:00:00</h1>
      </div>
    </div>
  );
};

export default Uptime;
