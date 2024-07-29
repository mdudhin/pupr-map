import React, { useEffect, useState } from "react";

import DropdownSelect from "../../components/select";
import { getMockData } from "../../services/mock-data";
import { useParams } from "react-router-dom";

interface DataOption {
  value: string;
  label: string;
}

interface Video {
  thumbnail: string;
  url: string;
}

interface MediaData {
  photo: string[];
  video: Video[];
}

interface PhotoComponentProps {
  data: string[];
}

interface VideoComponentProps {
  data: Video[];
}

const PhotoComponent: React.FC<PhotoComponentProps> = ({ data }) => {
  return (
    <div className="flex flex-row flex-wrap gap-5 justify-between">
      {data.map((item, index) => (
        <img key={index} src={item} className="w-96 rounded-sm" alt="Photo" />
      ))}
    </div>
  );
};

const VideoComponent: React.FC<VideoComponentProps> = ({ data }) => {
  const navigateToUrl = (url: string) => {
    window.location.href = url;
  };
  return (
    <div className="flex flex-row flex-wrap gap-5 justify-between">
      {data.map((item, index) => (
        <img
          src={item.thumbnail}
          className="w-96 rounded-sm cursor-pointer"
          onClick={() => navigateToUrl(item.url)}
        />
      ))}
    </div>
  );
};

export const Documentation: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dataSelect: DataOption[] = [
    { value: "photo", label: "Foto" },
    { value: "video", label: "Video" },
  ];

  const [selectedValue, setSelectedValue] = useState<string>("photo");
  const [data, setData] = useState<MediaData | null>(null);

  const handleSelectChange = (event: {
    target: { value: any; name: string };
  }) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    const response: any = getMockData(id as string);
    setData(response);
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { photo, video } = data;

  return (
    <div className="flex flex-col bg-gray-50 p-6 rounded-sm min-h-screen gap-5">
      <DropdownSelect
        className="w-[300px]"
        data={dataSelect}
        defaultValue="photo"
        name="docSelect"
        placeholder="Select a type"
        emptyState="No options available"
        onChange={handleSelectChange}
      />

      {selectedValue === "photo" && <PhotoComponent data={photo} />}
      {selectedValue === "video" && <VideoComponent data={video} />}
    </div>
  );
};
