import React, { useEffect, useState } from "react";

import DropdownSelect from "../../components/select";
import PhotoCard from "../../components/photo-card";
import VideoCard from "../../components/video-card";
import { getMockData } from "../../services/mock-data";
import { useParams } from "react-router-dom";

interface DataOption {
  value: string;
  label: string;
}

interface PhotoItem {
  url: string;
  description: string;
  date: string;
}

interface MediaData {
  photo: PhotoItem[];
  video: Video[];
}

interface Video {
  thumbnail: string;
  url: string;
  title: string;
  date: string;
}

interface VideoComponentProps {
  data: Video[];
  selectedMonth: string;
}

interface PhotoComponentProps {
  data: PhotoItem[];
  onImageClick: (src: string) => void;
}

const PhotoComponent: React.FC<PhotoComponentProps> = ({
  data,
  onImageClick,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {data.map((item, index) => (
        <PhotoCard
          key={index}
          src={item.url}
          onImageClick={onImageClick}
          description={item.description}
          date={item.date}
        />
      ))}
    </div>
  );
};

const VideoComponent: React.FC<VideoComponentProps> = ({
  data,
  selectedMonth,
}) => {
  // Filter videos by selected month, if a month is selected
  const filteredVideos = selectedMonth
    ? data.filter((video) => {
        const videoDate = new Date(video.date);
        const monthYear = videoDate.toLocaleString("default", {
          month: "long",
          year: "numeric",
        });
        return selectedMonth === "all" || monthYear === selectedMonth;
      })
    : data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {filteredVideos.map((item, index) => (
        <VideoCard
          key={index}
          url={item.url}
          title={item.title}
          date={item.date}
        />
      ))}
    </div>
  );
};

const Documentation = () => {
  const { id } = useParams<{ id: string }>();
  const dataSelect: DataOption[] = [
    { value: "photo", label: "Foto" },
    { value: "video", label: "Video" },
  ];

  const [selectedValue, setSelectedValue] = useState<string>("photo");
  const [data, setData] = useState<MediaData | null>(null);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string>("all");

  // Extract unique months for video dropdown
  const getUniqueMonths = (videos: Video[]) => {
    const months = videos.map((video) => {
      const date = new Date(video.date);
      return date.toLocaleString("default", { month: "long", year: "numeric" });
    });
    return Array.from(new Set(months));
  };

  const [videoMonths, setVideoMonths] = useState<string[]>([]);

  useEffect(() => {
    const response: any = getMockData(id as string);
    setData(response);

    if (response && response.video) {
      setVideoMonths(getUniqueMonths(response.video));
    }
  }, [id]);

  const handleSelectChange = (event: {
    target: { value: any; name: string };
  }) => {
    setSelectedValue(event.target.value);
  };

  const handleMonthChange = (event: {
    target: { value: any; name: string };
  }) => {
    setSelectedMonth(event.target.value);
  };

  const handleImageClick = (src: string) => {
    setFullScreenImage(src);
  };

  const handleFullScreenClose = () => {
    setFullScreenImage(null);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  const { photo, video } = data;

  return (
    <div className="relative flex flex-col bg-gray-50 p-6 rounded-sm min-h-screen gap-5">
      {/* Use DropdownSelect for media type selection */}
      <DropdownSelect
        className="w-[300px]"
        data={dataSelect}
        defaultValue="photo"
        name="docSelect"
        placeholder="Select a type"
        emptyState="No options available"
        onChange={handleSelectChange}
      />

      {selectedValue === "video" && (
        <DropdownSelect
          className="w-[200px] p-2 mt-4 border rounded-md"
          data={[
            { value: "all", label: "All Months" },
            ...videoMonths.map((month) => ({ value: month, label: month })),
          ]}
          defaultValue="all"
          name="monthSelect"
          placeholder="Select a month"
          emptyState="No months available"
          onChange={handleMonthChange}
        />
      )}

      {selectedValue === "photo" && (
        <PhotoComponent data={photo} onImageClick={handleImageClick} />
      )}

      {selectedValue === "video" && (
        <VideoComponent data={video} selectedMonth={selectedMonth} />
      )}

      {fullScreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          onClick={handleFullScreenClose}
        >
          <img
            src={fullScreenImage}
            className="max-w-[800px] max-h-[500px] rounded-sm"
            alt="Full Screen"
          />
        </div>
      )}
    </div>
  );
};

export default Documentation;
