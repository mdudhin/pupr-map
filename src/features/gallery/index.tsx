import { CustomTabs } from "../../components/tabs";
import InfografisGallery from "./infografis";
import PhotoGallery from "./photo";
import VideoGallery from "./video";

const GalleryPage = () => {
  const tabs = [
    {
      trigger: <span>Foto</span>,
      value: "workDetail",
      content: <PhotoGallery />,
    },
    {
      trigger: <span>Video</span>,
      value: "documentation",
      content: <VideoGallery />,
    },
    {
      trigger: <span>Infografis</span>,
      value: "cctv",
      content: <InfografisGallery />,
    },
  ];
  return (
    <div className="flex flex-col p-5">
      <CustomTabs tabs={tabs} />
    </div>
  );
};

export default GalleryPage;
