// import React, { useEffect, useState } from "react";

// import DropdownSelect from "../../components/select";
// import { getMockData } from "../../services/mock-data";
// import { useParams } from "react-router-dom";

// interface DataOption {
//   value: string;
//   label: string;
// }

// interface Video {
//   thumbnail: string;
//   url: string;
//   title: string;
// }

// interface MediaData {
//   photo: string[];
//   video: Video[];
// }

// interface PhotoComponentProps {
//   data: string[];
//   onImageClick: (src: string) => void;
// }

// interface VideoComponentProps {
//   data: Video[];
// }

// const PhotoComponent: React.FC<PhotoComponentProps> = ({
//   data,
//   onImageClick,
// }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//       {data.map((item, index) => (
//         <div key={index} className="flex justify-center">
//           <img
//             src={item}
//             className="w-full h-auto rounded-md shadow-md cursor-pointer"
//             alt={`Photo ${index}`}
//             onClick={() => onImageClick(item)}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// const VideoComponent: React.FC<VideoComponentProps> = ({ data }) => {
//   const navigateToUrl = (url: string) => {
//     window.location.href = url;
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//       {data.map((item, index) => (
//         <div
//           key={index}
//           className="flex justify-center flex-col bg-white rounded-md cursor-pointer shadow-md"
//         >
//           <img
//             key={index}
//             src={item.thumbnail}
//             className="w-full h-auto rounded-t-md  "
//             alt={`Photo ${index}`}
//             onClick={() => navigateToUrl(item.url)}
//           />
//           <div className="p-3">
//             <label className="">{item.title}</label>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export const Documentation: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const dataSelect: DataOption[] = [
//     { value: "photo", label: "Foto" },
//     { value: "video", label: "Video" },
//   ];

//   const [selectedValue, setSelectedValue] = useState<string>("photo");
//   const [data, setData] = useState<MediaData | null>(null);
//   const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

//   const handleSelectChange = (event: {
//     target: { value: any; name: string };
//   }) => {
//     setSelectedValue(event.target.value);
//   };

//   const handleImageClick = (src: string) => {
//     setFullScreenImage(src);
//   };

//   const handleFullScreenClose = () => {
//     setFullScreenImage(null);
//   };

//   useEffect(() => {
//     const response: any = getMockData(id as string);
//     setData(response);
//   }, [id]);

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   const { photo, video } = data;

//   return (
//     <div className="relative flex flex-col bg-gray-50 p-6 rounded-sm min-h-screen gap-5">
//       <DropdownSelect
//         className="w-[300px]"
//         data={dataSelect}
//         defaultValue="photo"
//         name="docSelect"
//         placeholder="Select a type"
//         emptyState="No options available"
//         onChange={handleSelectChange}
//       />

//       {selectedValue === "photo" && (
//         <PhotoComponent data={photo} onImageClick={handleImageClick} />
//       )}
//       {selectedValue === "video" && <VideoComponent data={video} />}

//       {fullScreenImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
//           onClick={handleFullScreenClose}
//         >
//           <img
//             src={fullScreenImage}
//             className="max-w-full max-h-full"
//             alt="Full Screen"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Documentation;

import React, { useEffect, useState } from "react";

import DropdownSelect from "../../components/select";
// import { Folder } from "lucide-react";
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
}

// interface FolderComponentProps {
//   data: PhotoItem[];
//   onFolderClick: (src: string) => void;
// }

interface PhotoComponentProps {
  data: PhotoItem[];
  onImageClick: (src: string) => void;
}

// const FolderComponent: React.FC<FolderComponentProps> = ({
//   data,
//   onFolderClick,
// }) => {
//   return (
//     <div className="flex flex-row flex-wrap gap-5">
//       {data.map((item, index) => (
//         <div
//           key={index}
//           className="flex justify-center rounded-md bg-white shadow-md px-5 py-3 cursor-pointer gap-x-3"
//           onClick={() => onFolderClick(item.src)}
//         >
//           <Folder />
//           {item.description}
//         </div>
//       ))}
//     </div>
//   );
// };

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

const VideoComponent: React.FC<VideoComponentProps> = ({ data }) => {
  return (
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

  const handleSelectChange = (event: {
    target: { value: any; name: string };
  }) => {
    setSelectedValue(event.target.value);
  };

  // const handleClick = (src: string) => {
  //   window.location.href = src;
  // };

  const handleImageClick = (src: string) => {
    setFullScreenImage(src);
  };

  const handleFullScreenClose = () => {
    setFullScreenImage(null);
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
    <div className="relative flex flex-col bg-gray-50 p-6 rounded-sm min-h-screen gap-5">
      <DropdownSelect
        className="w-[300px]"
        data={dataSelect}
        defaultValue="photo"
        name="docSelect"
        placeholder="Select a type"
        emptyState="No options available"
        onChange={handleSelectChange}
      />

      {selectedValue === "photo" && (
        <PhotoComponent data={photo} onImageClick={handleImageClick} />
      )}
      {selectedValue === "video" && <VideoComponent data={video} />}

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
