import DropdownSelect from "../../components/select";
import React from "react";

export const Documentation = () => {
  const data = [
    { value: "photo", label: "Foto" },
    { value: "video", label: "Video" },
  ];
  return (
    <div className="flex flex-col bg-gray-50 p-6 rounded-sm min-h-screen">
      <DropdownSelect
        className="w-[300px]"
        data={data}
        defaultValue="photo"
        name="docSelect"
        placeholder="Select a type"
        emptyState="No options available"
      />
    </div>
  );
};
