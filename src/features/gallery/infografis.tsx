import React, { useEffect, useState } from "react";
import { getInfoGrafis, getPhotoGallery } from "../../services/mock-data";

import PhotoCard from "../../components/photo-card";

interface InfografisType {
  url: string;
  description: string;
}

const InfografisGallery = () => {
  const [data, setData] = useState<InfografisType[]>([]);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setFullScreenImage(src);
  };

  const handleFullScreenClose = () => {
    setFullScreenImage(null);
  };

  useEffect(() => {
    const response: any = getInfoGrafis();
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
          />
        ))}
      </div>

      {fullScreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleFullScreenClose}
        >
          <img
            src={fullScreenImage}
            className="max-w-full max-h-full"
            alt="Full Screen"
          />
        </div>
      )}
    </>
  );
};

export default InfografisGallery;
