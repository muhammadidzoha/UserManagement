import React from "react";

const ServerSystemStaticItem = (props) => {
  return (
    <div className="flex justify-between items-stretch mx-[15px] mb-[35px]">
      <div>
        <h1 className="text-xs mb-[4px] w-[90px]">{props.title}</h1>
        <p className={`text-[8px] font-light ${props.uk}`}>{props.stats}</p>
      </div>
      <div>{props.chart}</div>
    </div>
  );
};

export default ServerSystemStaticItem;
