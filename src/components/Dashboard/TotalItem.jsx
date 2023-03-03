import React from "react";

const TotalItem = (props) => {
  return (
    <div
      className={`${props.bg} ${props.basis} rounded-[10px] drop-shadow-customShadow`}
    >
      <div className="flex justify-between items-center px-3 pt-3 text-white">
        <p className="text-xs">{props.titleIcon}</p>
        <div className="scale-150">{props.icon}</div>
      </div>
      <h1 className="text-center text-2xl text-white mt-[8px] mb-1">
        {props.number}
      </h1>
      <div className="flex justify-between px-3">
        <div className="flex items-center">
          <div className="text-[#17A54F] mr-[5px]">{props.iconConnect}</div>
          <p className="text-white">{props.connectTitle}</p>
        </div>
        <div className="flex items-center">
          <div className="text-[#D82121] mr-[5px]">{props.iconDisconnect}</div>
          <p className="text-white">{props.disconnectTitle}</p>
        </div>
        <div className="text-white -mr-2 scale-150">{props.infoIcon}</div>
      </div>
    </div>
  );
};

export default TotalItem;
