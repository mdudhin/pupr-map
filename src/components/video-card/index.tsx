import React from "react";

interface VideoType {
  url: string;
  title: string;
  date: string;
}

const VideoCard: React.FC<VideoType> = ({ url, title, date }) => {
  return (
    <div className="flex justify-center flex-col bg-white rounded-md cursor-pointer shadow-md">
      <iframe
        src={url}
        title={title}
        className="w-full h-60 rounded-t-md"
        allowFullScreen
        loading="lazy"
        onClick={(e) => e.stopPropagation()} // Prevent the iframe click from triggering the modal
      ></iframe>
      <div className="p-3">
        <span className="text-gray-500 text-sm">{date}</span>
        <label className="block mt-1">{title}</label>
      </div>
    </div>
  );
};

export default VideoCard;
