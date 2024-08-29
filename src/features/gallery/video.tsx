import { useEffect, useState } from "react";

import DropdownSelect from "../../components/select";
import VideoCard from "../../components/video-card";
import { getVideoGallery } from "../../services/mock-data";

interface VideoType {
  thumbnail: string;
  url: string;
  title: string;
  date: string;
}

const VideoGallery = () => {
  const [data, setData] = useState<VideoType[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>("all");
  const [videoMonths, setVideoMonths] = useState<string[]>([]);

  // Extract unique months for video dropdown
  const getUniqueMonths = (videos: VideoType[]) => {
    const months = videos.map((video) => {
      const date = new Date(video.date);
      return date.toLocaleString("default", { month: "long", year: "numeric" });
    });
    return Array.from(new Set(months));
  };

  useEffect(() => {
    const response: any = getVideoGallery();
    setData(response);

    if (response) {
      setVideoMonths(getUniqueMonths(response));
    }
  }, []);

  const handleMonthChange = (event: { target: { value: any } }) => {
    setSelectedMonth(event.target.value);
  };

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
    <div className="relative flex flex-col bg-gray-50 p-6 rounded-sm min-h-screen gap-5">
      {/* Month Dropdown */}
      <DropdownSelect
        className="w-[200px] p-2 border rounded-md"
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
    </div>
  );
};

export default VideoGallery;
