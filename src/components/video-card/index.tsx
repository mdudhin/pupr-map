import React from "react";

interface VideoType {
  src: string;
  onVideoClick: (url: string) => void;
  url: string;
  title: string;
}

const VideoCard: React.FC<VideoType> = ({ src, onVideoClick, url, title }) => {
  return (
    <div className="flex justify-center flex-col bg-white rounded-md cursor-pointer shadow-md">
      <img
        src={src}
        className="w-full h-auto rounded-t-md"
        alt={`Photo ${src}`}
        onClick={() => onVideoClick(url)}
      />
      <div className="p-3">
        <label className="">{title}</label>
      </div>
    </div>
  );
};

export default VideoCard;
