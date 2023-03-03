import React from "react";
import ServerSystemStaticItem from "./ServerSystemStaticItem";
import ServerSystemStaticItemList from "./ServerSystemStaticItemList";

const ServerSystemStatic = () => {
  return (
    <div className="ml-[24px] bg-white h-[470px] rounded-[10px]">
      <h1 className="pt-[10px] pl-[10px] text-xs mb-[25px]">Performance</h1>
      {/* <div className="flex justify-center items-stretch space-x-3">
        <div>
          <h1 className="text-xs mb-[4px]">CPU</h1>
          <p className="text-[10px] font-light">49% 2.00 Ghz</p>
        </div>
        <div>
          <img src="/DashboardPage/Chart1.svg" alt="chart" />
        </div>
      </div> */}
      <ServerSystemStaticItemList />
    </div>
  );
};

export default ServerSystemStatic;
