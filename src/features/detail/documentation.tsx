import React, { useState } from "react";

import DropdownSelect from "../../components/select";

const PhotoComponent: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap gap-5 justify-between">
      <img
        src="https://sumeksradio.disway.id/upload/42d0327ce309d379cb9205ed67edcf52.jpg"
        className="w-96 rounded-sm"
      />
      <img
        src="https://sumsel.news/wp-content/uploads/2021/09/dikeringkan.jpg"
        className="w-96 rounded-sm"
      />
      <img
        src="https://tender-indonesia.com/newsrectory/events/29.proyek-pembangunan-bendungan-tiga-dihaji.jpg"
        className="w-96 rounded-sm"
      />
    </div>
  );
};

const VideoComponent: React.FC = () => {
  const navigateToUrl = () => {
    window.location.href =
      "https://drive.google.com/file/d/122L_sWML5e1f9gdVWizTJXJa4bm-Q4jf/view";
  };

  return (
    <div className="flex flex-row flex-wrap gap-5 justify-between">
      <img
        src="https://sumeksradio.disway.id/upload/42d0327ce309d379cb9205ed67edcf52.jpg"
        className="w-96 rounded-sm cursor-pointer"
        onClick={navigateToUrl}
      />
      <img
        src="https://sumsel.news/wp-content/uploads/2021/09/dikeringkan.jpg"
        className="w-96 rounded-sm cursor-pointer"
        onClick={navigateToUrl}
      />
      <img
        src="https://tender-indonesia.com/newsrectory/events/29.proyek-pembangunan-bendungan-tiga-dihaji.jpg"
        className="w-96 rounded-sm cursor-pointer"
        onClick={navigateToUrl}
      />
    </div>
  );
};

interface DataOption {
  value: string;
  label: string;
}

export const Documentation: React.FC = () => {
  const data: DataOption[] = [
    { value: "photo", label: "Foto" },
    { value: "video", label: "Video" },
  ];

  const [selectedValue, setSelectedValue] = useState<string>("photo");

  const handleSelectChange = (event: {
    target: { value: any; name: string };
  }) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="flex flex-col bg-gray-50 p-6 rounded-sm min-h-screen gap-5">
      <DropdownSelect
        className="w-[300px]"
        data={data}
        defaultValue="photo"
        name="docSelect"
        placeholder="Select a type"
        emptyState="No options available"
        onChange={handleSelectChange}
      />

      {selectedValue === "photo" && <PhotoComponent />}
      {selectedValue === "video" && <VideoComponent />}
    </div>
  );
};
