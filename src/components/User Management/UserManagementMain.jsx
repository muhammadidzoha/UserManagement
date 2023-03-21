import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Icon } from "@iconify/react";
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
      <table class="table-auto mt-[30px] border border-1 border-black w-full text-center text-sm">
        <thead className="bg-[#43B7F9] text-white">
          <tr>
            <th className="border border-1 border-black">No</th>
            <th className="border border-1 border-black">Username</th>
            <th className="border border-1 border-black">Role</th>
            <th className="border border-1 border-black">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-1 border-black h-[30px]">
            <td className="border border-1 border-black">1</td>
            <td className="border border-1 border-black">******</td>
            <td className="border border-1 border-black">Superadmin</td>
            <td className="border border-1 border-black">1961</td>
          </tr>
          <tr className="border border-1 border-black h-[30px]">
            <td className="border border-1 border-black">2</td>
            <td className="border border-1 border-black">UserTNIAL2</td>
            <td className="border border-1 border-black">Admin</td>
            <td className="border border-1 border-black">1961</td>
          </tr>
          <tr className="border border-1 border-black h-[30px]">
            <td className="border border-1 border-black">3</td>
            <td className="border border-1 border-black">UserTNIAL3</td>
            <td className="border border-1 border-black">Admin</td>
            <td className="border border-1 border-black">Admin</td>
          </tr>
          <tr className="border border-1 border-black h-[30px]">
            <td className="border border-1 border-black">4</td>
            <td className="border border-1 border-black">UserTNIAL4</td>
            <td className="border border-1 border-black">Admin</td>
            <td className="border border-1 border-black">Admin</td>
          </tr>
          <tr className="border border-1 border-black h-[30px]">
            <td className="border border-1 border-black"></td>
            <td className="border border-1 border-black"></td>
            <td className="border border-1 border-black"></td>
            <td className="border border-1 border-black"></td>
          </tr>
          <tr className="border border-1 border-black h-[30px]">
            <td className="border border-1 border-black"></td>
            <td className="border border-1 border-black"></td>
            <td className="border border-1 border-black"></td>
            <td className="border border-1 border-black"></td>
          </tr>
          <tr className="border border-1 border-black h-[30px]">
            <td className="border border-1 border-black"></td>
            <td className="border border-1 border-black"></td>
            <td className="border border-1 border-black"></td>
            <td className="border border-1 border-black"></td>
          </tr>
          <tr className="border border-1 border-black h-[30px]">
            <td className="border border-1 border-black"></td>
            <td className="border border-1 border-black"></td>
            <td className="border border-1 border-black"></td>
            <td className="border border-1 border-black"></td>
          </tr>
          <tr className="border border-1 border-black h-[30px]">
            <td className="border border-1 border-black"></td>
            <td className="border border-1 border-black"></td>
            <td className="border border-1 border-black"></td>
            <td className="border border-1 border-black"></td>
          </tr>
          <tr className="border border-1 border-black h-[30px]">
            <td className="border border-1 border-black"></td>
            <td className="border border-1 border-black"></td>
            <td className="border border-1 border-black"></td>
            <td className="border border-1 border-black"></td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center justify-center space-x-5 mt-[26px]">
        <Icon icon="ic:baseline-keyboard-arrow-left" />
        <div className="flex space-x-2">
          <p>1</p>
          <span>-</span>
          <p>10</p>
          <p>page</p>
          <p>1</p>
          <span>of</span>
          <p>1</p>
        </div>
        <Icon icon="ic:baseline-keyboard-arrow-right" />
      </div>
    </div>
  );
};

export default UserManagementMain;
