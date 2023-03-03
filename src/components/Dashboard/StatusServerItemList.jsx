import React from "react";
import { Icon } from "@iconify/react";
import StatusServerItem from "./StatusServerItem";

const StatusServerItemList = (props) => {
  return (
    <div className={`flex ${props.gap}`}>
      <StatusServerItem
        title="VOIP"
        icon={
          <Icon icon="tabler:server" className="scale-150 text-[#17A54F]" />
        }
        iconTitle="Connected"
      />
      <StatusServerItem
        title="DB"
        icon={
          <Icon icon="tabler:server-off" className="scale-150 text-[#D82121]" />
        }
        iconTitle="Connected"
      />
      <StatusServerItem
        title="Web"
        icon={
          <Icon icon="tabler:server" className="scale-150 text-[#17A54F]" />
        }
        iconTitle="Connected"
      />
      <StatusServerItem
        title="SSH"
        icon={
          <Icon icon="tabler:server" className="scale-150 text-[#17A54F]" />
        }
        iconTitle="Connected"
      />
    </div>
  );
};

export default StatusServerItemList;
