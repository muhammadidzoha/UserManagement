import React from "react";
import InputParticular from "./InputParticular";

const FormChangePassword = (props) => {
  return (
    <div>
      <h1 className="font-semibold">Change Password</h1>
      <form className="mt-[23px] px-3">
        <InputParticular label="Username" type="text" placeholder="UserTNIAL" />
        <InputParticular
          mg="mt-4"
          label="Old Password"
          placeholder="12345678"
          type={props.type1}
          handle={props.handle1}
          icon={props.icon1}
        />
        <InputParticular
          mg="mt-4"
          label="New Password"
          placeholder="abcdefghj"
          type={props.type2}
          handle={props.handle2}
          icon={props.icon2}
        />
        <InputParticular
          mg="mt-4"
          label="Retype your new password"
          placeholder="abcdefghj"
          type={props.type3}
          handle={props.handle3}
          icon={props.icon3}
        />
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

export default FormChangePassword;
