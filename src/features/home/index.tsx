import InteractiveMap, { LatLng, Marker } from "../../components/map";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const markersData = [
  {
    id: 1,
    lat: -4.158,
    lng: 103.239,
    type: "irigasi",
    title: "Daerah Irigasi Lematang",
    imageUrl:
      "https://sumeksradio.disway.id/upload/42d0327ce309d379cb9205ed67edcf52.jpg",
  },
  {
    id: 2,
    lat: -4.305,
    lng: 104.382,
    type: "irigasi",
    title: "Daerah Irigasi Komering",
    imageUrl: "https://sumsel.news/wp-content/uploads/2021/09/dikeringkan.jpg",
  },
  {
    id: 3,
    lat: -4.629415,
    lng: 103.876438,
    type: "bendungan",
    title: "Bendungan Tiga Dihaji",
    imageUrl:
      "https://tender-indonesia.com/newsrectory/events/29.proyek-pembangunan-bendungan-tiga-dihaji.jpg",
  },
  // Add more marker data objects as needed
];

const HomePage = () => {
  const navigate = useNavigate();
  // const [markers, setMarkers] = useState<LatLng[]>([]);

  // const addMarker = (position: LatLng) => {
  //   setMarkers((prevMarkers) => [...prevMarkers, position]);
  // };

  // const handleMarkerClick = (position: { lat: number; lng: number }) => {
  //   alert(`Marker at ${position.lat}, ${position.lng} clicked!`);
  // };

  const markers: Marker[] = markersData.map((marker) => ({
    lat: marker.lat,
    lng: marker.lng,
    component: (
      <div
        className="flex flex-col gap-2 cursor-pointer"
        onClick={() => handleDetail(marker)}
      >
        <label className="text-lg font-semibold">{marker.title}</label>
        <img src={marker.imageUrl} alt={marker.title} />
      </div>
    ),
  }));

  const handleDetail = (marker: any) => {
    navigate(`/visiting-point/detail/${marker.type}/${marker.id}`);
  };

  return (
    <InteractiveMap
      center={{ lat: -3.3194, lng: 104.9147 }}
      zoom={8}
      // onMarkerClick={handleMarkerClick}
      // addMarker={addMarker}
      markers={markers}
    />
  );
};

export default HomePage;
