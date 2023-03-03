import React from "react";
import { BiUser as User } from "react-icons/bi";
import { FaInfo as Info } from "react-icons/fa";
import { Icon } from "@iconify/react";
import TotalItem from "./TotalItem";
import DateTime from "./DateTime";
import Uptime from "./Uptime";
import StatusServer from "./StatusServer";
import ServerSystemStatic from "./ServerSystemStatic";

const DashboardMain = (props) => {
  return (
    <div className={`bg-[#ECF9FE] ${props.uk} h-screen pt-[18px]`}>
      <div className="flex flex-row mx-[24px] gap-3 h-[100px]">
        <DateTime />
        <TotalItem
          bg="bg-[#57C3DB]"
          basis={props.basis}
          titleIcon="Total User"
          icon={<User />}
          number="19"
          iconConnect={<Icon icon="mdi:lan-connect" />}
          connectTitle="10"
          iconDisconnect={<Icon icon="mdi:lan-disconnect" />}
          disconnectTitle="09"
          infoIcon={<Info />}
        />
        <TotalItem
          bg="bg-[#43B7F9]"
          basis={props.basis}
          titleIcon="Total Group"
          icon={<Icon icon="carbon:group-access" />}
          number="15"
          iconConnect={<Icon icon="mdi:lan-connect" />}
          connectTitle="10"
          iconDisconnect={<Icon icon="mdi:lan-disconnect" />}
          disconnectTitle="05"
          infoIcon={<Info />}
        />
        <TotalItem
          bg="bg-[#1F8BEA]"
          basis={props.basis}
          titleIcon="Total Radio"
          icon={<Icon icon="emojione-monotone:radio" />}
          number="10"
          iconConnect={<Icon icon="mdi:radio" />}
          connectTitle="09"
          iconDisconnect={<Icon icon="mdi:radio-off" />}
          disconnectTitle="01"
          infoIcon={<Info />}
        />
        <Uptime basisUptime={props.basisUptime} />
      </div>
      <StatusServer basis={props.basisStatusServer} gap={props.gap} />
      <div className="flex flex-row">
        <div className="basis-[210px]">
          <ServerSystemStatic />
        </div>
        <div className={`flex ml-[16px] ${props.id}`}>
          <img src="/DashboardPage/ID.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
