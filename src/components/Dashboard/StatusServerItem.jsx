import React from "react";

const StatusServerItem = (props) => {
  return (
    <div className="text-white ml-[11px]">
      <p className="text-xs mb-[12px]">{props.title}</p>
      <div className="flex items-center ml-1">
        {/* <Icon icon="tabler:server" className="scale-150 text-[#17A54F]" /> */}
        {props.icon}
        <p className="text-xs ml-[13px]">{props.iconTitle}</p>
      </div>
    </div>
  );
};

export default StatusServerItem;
