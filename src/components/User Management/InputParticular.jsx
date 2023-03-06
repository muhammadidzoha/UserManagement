import React from "react";

const InputParticular = (props) => {
  return (
    <div className={`flex justify-between items-center ${props.mg}`}>
      <label className="text-[9px]">{props.label}</label>
      <div className="flex space-x-5">
        <span>:</span>
        <div className="relative">
          <input
            type={props.type}
            placeholder={props.placeholder}
            className="w-[200px] h-[28px] rounded-[5px] border border-1 border-[#D4D4D4] focus:outline-none text-xs px-3"
          />
          <button
            type="button"
            className="absolute top-[50%] -translate-y-[50%] right-2"
            onClick={props.handle}
          >
            {props.icon}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputParticular;
