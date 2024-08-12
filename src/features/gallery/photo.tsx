import React, { useEffect, useState } from "react";

import PhotoCard from "../../components/photo-card";
import { getPhotoGallery } from "../../services/mock-data";

interface PhotoType {
  url: string;
  description: string;
  date: string;
}

const PhotoGallery = () => {
  const [data, setData] = useState<PhotoType[]>([]);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setFullScreenImage(src);
  };

  const handleFullScreenClose = () => {
    setFullScreenImage(null);
  };

  useEffect(() => {
    const response: any = getPhotoGallery();
    setData(response);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item, index) => (
          <PhotoCard
            key={index}
            src={item.url}
            onImageClick={handleImageClick}
            description={item.description}
            date={item.date}
          />
        ))}
      </div>

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
    </>
  );
};

export default PhotoGallery;
