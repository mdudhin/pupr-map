import { useEffect, useState } from "react";

import DropdownSelect from "../../components/select"; // Reusing the DropdownSelect component
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
  const [selectedMonth, setSelectedMonth] = useState<string>("all");
  const [photoMonths, setPhotoMonths] = useState<string[]>([]);

  // Extract unique months for photos dropdown
  const getUniqueMonths = (photos: PhotoType[]) => {
    const months = photos.map((item) => {
      const date = new Date(item.date);
      return date.toLocaleString("default", { month: "long", year: "numeric" });
    });
    return Array.from(new Set(months));
  };

  useEffect(() => {
    const response: any = getPhotoGallery();
    setData(response);

    if (response) {
      setPhotoMonths(getUniqueMonths(response));
    }
  }, []);

  const handleMonthChange = (event: { target: { value: any } }) => {
    setSelectedMonth(event.target.value);
  };

  // Filter photos by selected month, if a month is selected
  const filteredPhotos = selectedMonth
    ? data.filter((item) => {
        const itemDate = new Date(item.date);
        const monthYear = itemDate.toLocaleString("default", {
          month: "long",
          year: "numeric",
        });
        return selectedMonth === "all" || monthYear === selectedMonth;
      })
    : data;

  const handleImageClick = (src: string) => {
    setFullScreenImage(src);
  };

  const handleFullScreenClose = () => {
    setFullScreenImage(null);
  };

  return (
    <>
      {/* Month Dropdown */}
      <DropdownSelect
        className="w-[200px] p-2 border rounded-md mb-5"
        data={[
          { value: "all", label: "All Months" },
          ...photoMonths.map((month) => ({ value: month, label: month })),
        ]}
        defaultValue="all"
        name="monthSelect"
        placeholder="Select a month"
        emptyState="No months available"
        onChange={handleMonthChange}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredPhotos.map((item, index) => (
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
