import React from "react";
import ServerSystemStaticItem from "./ServerSystemStaticItem";

const ServerSystemStaticItemList = () => {
  return (
    <div>
      <ServerSystemStaticItem
        title="CPU"
        stats="49% 2.00 Ghz"
        chart={<img src="/DashboardPage/Chart1.svg" />}
      />
      <ServerSystemStaticItem
        title="Memory"
        stats="21/128 GB (15%)"
        chart={<img src="/DashboardPage/Chart2.svg" />}
      />
      <ServerSystemStaticItem
        title="Network Usage"
        uk="w-[70px]"
        stats="LAN S: 82 Mbps
        R: 80 Mbps"
        chart={<img src="/DashboardPage/Chart3.svg" />}
      />
      <ServerSystemStaticItem
        title="Disks 0 (C:) "
        uk="w-[23px]"
        stats="HDD 
        2%"
        chart={<img src="/DashboardPage/chart4.svg" />}
      />
    </div>
  );
};

export default ServerSystemStaticItemList;
