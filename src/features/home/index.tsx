import InteractiveMap, { LatLng, Marker } from "../../components/map";

import { useState } from "react";

const markers: Marker[] = [
  {
    lat: -4.108152,
    lng: 102.9741971,
    component: (
      <div className="flex flex-col gap-2">
        <label className=" text-lg font-semibold">
          Daerah Irigasi Lematang
        </label>
        <img src="https://sumeksradio.disway.id/upload/42d0327ce309d379cb9205ed67edcf52.jpg" />
      </div>
    ),
  },
];

const Home = () => {
  // const [markers, setMarkers] = useState<LatLng[]>([]);

  // const addMarker = (position: LatLng) => {
  //   setMarkers((prevMarkers) => [...prevMarkers, position]);
  // };

  // const handleMarkerClick = (position: { lat: number; lng: number }) => {
  //   alert(`Marker at ${position.lat}, ${position.lng} clicked!`);
  // };

  return (
    <div>
      <h1>My Map App</h1>
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

export default Home;
