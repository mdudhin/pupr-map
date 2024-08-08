import React from "react";

interface VideoType {
  src: string;
  onVideoClick: (url: string) => void;
  url: string;
  title: string;
  date: string;
}

const VideoCard: React.FC<VideoType> = ({
  src,
  onVideoClick,
  url,
  title,
  date,
}) => {
  return (
    <div className="flex justify-center flex-col bg-white rounded-md cursor-pointer shadow-md">
      <img
        src={src}
        className="w-full h-auto rounded-t-md"
        alt={`Photo ${src}`}
        onClick={() => onVideoClick(url)}
      />
      <div className="p-3">
        <span className="text-gray-500 text-sm">{date}</span>
        <label className="block mt-1">{title}</label>
      </div>
    </div>
  );
};

export default VideoCard;
