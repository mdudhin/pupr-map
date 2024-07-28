import { CustomTabs } from "../../components/tabs";
import React from "react";
import WorkDetail from "./work-detail";

const DetailPage = () => {
  const tabs = [
    {
      trigger: <span>Detail Pekerjaan</span>,
      value: "workDetail",
      content: <WorkDetail />,
    },
    {
      trigger: <span>Dokumentasi</span>,
      value: "documentation",
      content: <div>f</div>,
    },
    {
      trigger: <span>CCTV</span>,
      value: "cctv",
      content: <div>f</div>,
    },
  ];
  return (
    <div className="flex flex-col p-5">
      <CustomTabs tabs={tabs} />
    </div>
  );
};

export default DetailPage;
