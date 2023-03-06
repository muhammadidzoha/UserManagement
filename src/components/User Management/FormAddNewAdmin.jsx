import React from "react";
import InputParticular from "./InputParticular";

const FormAddNewAdmin = (props) => {
  return (
    <div>
      <h1 className="font-semibold pl-1">Add New Admin</h1>
      <form className="mt-[23px] px-3">
        <InputParticular label="Username" type="text" placeholder="UserTNIAL" />
        <InputParticular
          mg="mt-4"
          label="Password"
          placeholder="12345678"
          type={props.type1}
          handle={props.handle1}
          icon={props.icon1}
        />
        <InputParticular
          mg="mt-4"
          label="Retype your new password"
          placeholder="12345678"
          type={props.type2}
          handle={props.handle2}
          icon={props.icon2}
        />
        <div className="flex justify-between items-center mt-4">
          <label className="text-[9px]">Select Role</label>
          <div className="flex space-x-5">
            <span>:</span>
            <select className="w-[200px] h-[28px] px-3 rounded-[5px] border border-[#D4D4D4] text-xs bg-transparent">
              <option selected>Choose a Role</option>
              <option value="Admin">Admin</option>
              <option value="Super Admin">Super Admin</option>
              <option value="User">User</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between w-60 mt-[36px]">
          <button
            type="submit"
            className="w-[100px] h-[30px] rounded-[10px] bg-[#FF5454] text-white text-xs font-semibold"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-[100px] h-[30px] rounded-[10px] bg-[#63B6FF] text-white text-xs font-semibold"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAddNewAdmin;
