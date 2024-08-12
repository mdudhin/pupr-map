import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    const response: any = getVideoGallery();
    setData(response);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item, index) => (
          <VideoCard
            key={index}
            url={item.url}
            title={item.title}
            date={item.date}
          />
        ))}
      </div>
    </>
  );
};

export default VideoGallery;
