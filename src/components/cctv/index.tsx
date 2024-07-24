import React from "react";

const CCTVEmbed = () => {
  const cctvStreamUrl = "https://video.nest.com/embedded/live/bb6vhx2L01"; // Example public CCTV stream URL

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        src={cctvStreamUrl}
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="CCTV Stream"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default CCTVEmbed;
