import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import MiniSidebarMain from "./components/Sidebar/MiniSidebarMain";
import SidebarMain from "./components/Sidebar/SidebarMain";
import { Icon } from "@iconify/react";
import GroupListMain from "./components/GroupList/GroupListMain";
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
                icon={<Icon icon="mdi:format-list-group" />}
                title="Group List"
              />
              <GroupListMain />
            </div>
          </div>
        ) : (
          <div className="flex">
            <MiniSidebarMain toggleShow={ChangeHandler} />
            <div className="mt-[8px]">
              <Navbar
                navbar="w-[627px]"
                icon={<Icon icon="mdi:format-list-group" />}
                title="Group List"
              />
              <GroupListMain />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Container;
