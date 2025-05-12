import React from "react";
import { useLocation } from "react-router-dom";
import bgScreen from "../../assets/bendungan.jpg";

const PublicInformationDetail: React.FC = () => {
  const location = useLocation();
  const { data } = location.state ?? {};

  return (
    <div className="relative flex flex-col">
      <img src={bgScreen} alt="bg" className="w-full h-screen object-cover" />

      <div className="absolute top-0 left-0 w-full h-full flex  bg-black bg-opacity-50 p-10">
        <div className="bg-white opacity-95 w-full p-6 rounded flex flex-col space-y-5">
          <h1 className="text-xl">{data.title}</h1>
          <iframe
            src={data.file}
            title="PDF Viewer"
            width="100%"
            height="100%"
            className="h-screen"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PublicInformationDetail;
