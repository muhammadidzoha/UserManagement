import React, { useState } from "react";
import DashboardMain from "./components/Dashboard/DashboardMain";
import Navbar from "./components/Navbar/Navbar";
import MiniSidebarMain from "./components/Sidebar/MiniSidebarMain";
import SidebarMain from "./components/Sidebar/SidebarMain";
import { MdOutlineDashboardCustomize as Dashboard } from "react-icons/md";

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
                icon={<Dashboard />}
                title="Dashboard"
              />
              <DashboardMain
                uk="w-[824px]"
                id="w-[550px]"
                basis="basis-[150px]"
                basisUptime="basis-[80px]"
                basisStatusServer="basis-[610px]"
                gap="gap-8"
              />
            </div>
          </div>
        ) : (
          <div className="flex">
            <MiniSidebarMain toggleShow={ChangeHandler} />
            <div className="mt-[8px]">
              <Navbar
                navbar="w-[627px]"
                icon={<Dashboard />}
                title="Dashboard"
              />
              <DashboardMain
                uk="w-[976px]"
                id="w-[700px]"
                basis="basis-[200px]"
                basisUptime="basis-[100px]"
                basisStatusServer="basis-[778px]"
                gap="gap-20"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Container;
