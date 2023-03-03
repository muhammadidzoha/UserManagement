import React from "react";
import { Icon } from "@iconify/react";
import StatusServerItem from "./StatusServerItem";
import StatusServerItemList from "./StatusServerItemList";
import ActiveCall from "./ActiveCall";

const StatusServer = (props) => {
  return (
    <div>
      <div className="flex mx-[24px] my-[10px] h-[100px] gap-3">
        <div className={`${props.basis} bg-[#00C2FF80] rounded-[10px]`}>
          <div>
            <div className="text-white flex items-center justify-between mx-[11px] mt-[9px] mb-[5px]">
              <p className="text-xs">Status Server</p>
              <Icon icon="tabler:server-2" className="scale-150" />
            </div>
            <StatusServerItemList gap={props.gap} />
          </div>
        </div>
        <div className="basis-[155px] rounded-[10px] bg-white flex items-center">
          <ActiveCall />
        </div>
      </div>
    </div>
  );
};

export default StatusServer;
