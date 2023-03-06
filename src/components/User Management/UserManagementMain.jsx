import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import FormAddNewAdmin from "./FormAddNewAdmin";
import FormChangePassword from "./FormChangePassword";

const UserManagementMain = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [showAdmin1, setShowAdmin1] = useState(false);
  const [showAdmin2, setShowAdmin2] = useState(false);

  const handleTogglePassword = () => {
    setShow(show ? false : true);
  };

  const handleTogglePassword2 = () => {
    setShow2(show2 ? false : true);
  };

  const handleTogglePassword3 = () => {
    setShow3(show3 ? false : true);
  };

  const handleTogglePasswordAdmin1 = () => {
    setShowAdmin1(showAdmin1 ? false : true);
  };

  const handleTogglePasswordAdmin2 = () => {
    setShowAdmin2(showAdmin2 ? false : true);
  };

  return (
    <div className="ml-[24px] pt-[18px]">
      <div className="grid grid-cols-2 gap-4 relative">
        <div>
          <FormChangePassword
            type1={show ? "text" : "password"}
            type2={show2 ? "text" : "password"}
            type3={show3 ? "text" : "password"}
            handle1={handleTogglePassword}
            handle2={handleTogglePassword2}
            handle3={handleTogglePassword3}
            icon1={show ? <IoMdEye /> : <IoMdEyeOff />}
            icon2={show2 ? <IoMdEye /> : <IoMdEyeOff />}
            icon3={show3 ? <IoMdEye /> : <IoMdEyeOff />}
          />
          <div className="border border-[#939393] rotate-90 absolute w-[280px] top-1/2 left-1/2 -translate-x-1/2"></div>
        </div>
        <div>
          <FormAddNewAdmin
            type1={showAdmin1 ? "text" : "password"}
            type2={showAdmin2 ? "text" : "password"}
            handle1={handleTogglePasswordAdmin1}
            handle2={handleTogglePasswordAdmin2}
            icon1={showAdmin1 ? <IoMdEye /> : <IoMdEyeOff />}
            icon2={showAdmin2 ? <IoMdEye /> : <IoMdEyeOff />}
          />
        </div>
      </div>
    </div>
  );
};

export default UserManagementMain;
