import DropdownSelect from "../../components/select";
import React from "react";

const CCTVDetail = () => {
  const data = [
    { value: "1", label: "Paket 1" },
    { value: "2", label: "Paket 2" },
    { value: "3", label: "Paket 3" },
    { value: "4", label: "Paket 4" },
  ];
  return (
    <div className="flex flex-col bg-gray-50 p-6 rounded-sm min-h-screen">
      <DropdownSelect
        className="w-[300px]"
        data={data}
        defaultValue="1"
        name="cctvSelect"
        placeholder="Select a paket"
        emptyState="No options available"
      />
    </div>
  );
};

export default CCTVDetail;
