import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import MiniSidebarMain from "./components/Sidebar/MiniSidebarMain";
import SidebarMain from "./components/Sidebar/SidebarMain";
import { MdOutlineManageAccounts as UserManagement } from "react-icons/md";
import UserManagementMain from "./components/User Management/UserManagementMain";

const Container = () => {
  const [open, setOpen] = useState(false);

  const ChangeHandler = () => {
    setOpen(!open);
  };

  return (
    <div className="flex">
      <div className={`${open ? "basis-[200px]" : "basis-[48px]"}`}>
        {open ? (
          <div className="flex">
            <SidebarMain toggleShow={ChangeHandler} />
            <div className="mt-[8px]">
              <Navbar
                navbar="w-[475px]"
                icon={<UserManagement />}
                title="User Management"
              />
              <UserManagementMain />
            </div>
          </div>
        ) : (
          <div className="flex">
            <MiniSidebarMain toggleShow={ChangeHandler} />
            <div className="mt-[8px]">
              <Navbar
                navbar="w-[627px]"
                icon={<UserManagement />}
                title="User Management"
              />
              <UserManagementMain />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Container;
