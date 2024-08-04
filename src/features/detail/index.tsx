import CCTVDetail from "./cctv";
import { CustomTabs } from "../../components/tabs";
import Documentation from "./documentation";
import React from "react";
import WorkDetail from "./work-detail";

const DetailPage = () => {
  const tabs = [
    {
      trigger: <span>Deskripsi Proyek</span>,
      value: "workDetail",
      content: <WorkDetail />,
    },
    {
      trigger: <span>Dokumentasi</span>,
      value: "documentation",
      content: <Documentation />,
    },
    {
      trigger: <span>CCTV</span>,
      value: "cctv",
      content: <CCTVDetail />,
    },
  ];
  return (
    <div className="flex flex-col p-5">
      <CustomTabs tabs={tabs} />
    </div>
  );
};

export default DetailPage;
