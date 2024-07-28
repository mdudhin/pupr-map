import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import React, { ReactNode } from "react";

import L from "leaflet";

const customIcon = new L.Icon({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export interface LatLng {
  lat: number;
  lng: number;
}

export interface Marker {
  lat: number;
  lng: number;
  component: ReactNode;
}

interface InteractiveMapProps {
  center?: LatLng;
  zoom?: number;
  onMarkerClick?: (position: LatLng) => void;
  addMarker?: (position: LatLng) => void;
  markers?: Marker[];
}

const LocationMarker: React.FC<{
  markers: Marker[];
  onMarkerClick: (position: LatLng) => void;
  addMarker: (position: LatLng) => void;
}> = ({ markers, onMarkerClick, addMarker }) => {
  const map = useMap();

  useMapEvents({
    click(e) {
      addMarker(e.latlng);
    },
  });

  return (
    <>
      {markers.map((position, idx) => (
        <Marker
          key={idx}
          position={position}
          icon={customIcon}
          eventHandlers={{
            click: () => {
              onMarkerClick(position);
              map.flyTo(position, 12);
            },
          }}
        >
          <Popup>{position.component}</Popup>
        </Marker>
      ))}
    </>
  );
};

const InteractiveMap: React.FC<InteractiveMapProps> = ({
  center = { lat: 51.505, lng: -0.09 },
  zoom = 13,
  onMarkerClick = (position: LatLng) => console.log("Marker clicked", position),
  addMarker = (position: LatLng) => console.log("Marker added", position),
  markers = [],
}) => {
  return (
    <MapContainer center={center} zoom={zoom} className="w-full h-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker
        markers={markers}
        onMarkerClick={onMarkerClick}
        addMarker={addMarker}
      />
    </MapContainer>
  );
};

export default InteractiveMap;
