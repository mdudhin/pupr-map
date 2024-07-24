import InteractiveMap, { LatLng, Marker } from "../../components/map";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const markersData = [
  {
    id: 1,
    lat: -4.108152,
    lng: 102.9741971,
    title: "Daerah Irigasi Lematang",
    imageUrl:
      "https://sumeksradio.disway.id/upload/42d0327ce309d379cb9205ed67edcf52.jpg",
    description:
      "Daerah irigasi lematang merupakan areal persawahan yang berada disebelah kiri aliran Sungai Lematang dengan luas baku 3.000 ha, yang terdiri dari ± 754 ha (fungsional) sawah tadah hujan sedangkan selebihnya ± 2.246 ha (potensial) berupa semak belukar dan kebun kopi.",
    damLocation:
      "Desa Semidang Alas, Kecamatan Dempo Tengah, Kota Pagaralam, Provinsi Sumatera Selatan",
    networkLocation: "Desa Tepus, Saripaya, Jokoh, Plang Kenidai dan Selabang",
    mileage: "Dari kota Palembang 281,9 KM (8 Jam Pejalanan)",
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
    navigate(`/detail/${marker.id}`);
  };

  return (
    <div>
      <InteractiveMap
        center={{ lat: -3.3194, lng: 104.9147 }}
        zoom={8}
        // onMarkerClick={handleMarkerClick}
        // addMarker={addMarker}
        markers={markers}
      />
    </div>
  );
};

export default HomePage;
