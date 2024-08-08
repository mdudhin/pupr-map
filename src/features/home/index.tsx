import InteractiveMap, { LatLng, Marker } from "../../components/map";

import DropdownSelect from "../../components/select";
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

const filterOptions = [
  { value: "all", label: "All" },
  { value: "irigasi", label: "Irigasi" },
  { value: "bendungan", label: "Bendungan" },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filteredMarkers, setFilteredMarkers] = useState(markersData);
  const [selectedType, setSelectedType] = useState("all");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
    filterMarkers(searchTerm, selectedType);
  };

  const handleTypeChange = (e: { target: { value: string } }) => {
    const type = e.target.value;
    setSelectedType(type);
    filterMarkers(search, type);
  };

  const filterMarkers = (searchTerm: string, type: string) => {
    setFilteredMarkers(
      markersData.filter((marker) => {
        const matchesSearch = marker.title.toLowerCase().includes(searchTerm);
        const matchesType = type === "all" || marker.type === type;
        return matchesSearch && matchesType;
      })
    );
  };

  const handleDetail = (marker: any) => {
    navigate(`/visiting-point/detail/${marker.type}/${marker.id}`);
  };

  const markers: Marker[] = filteredMarkers.map((marker) => ({
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

  return (
    <div className="relative h-full">
      <div className="absolute top-4 right-4 z-10 flex gap-4">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded"
        />
        <DropdownSelect
          name="type"
          placeholder="Filter by type"
          data={filterOptions}
          onChange={handleTypeChange}
          value={selectedType}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="h-full">
        <InteractiveMap
          center={{ lat: -3.3194, lng: 104.9147 }}
          zoom={8}
          markers={markers}
        />
      </div>
    </div>
  );
};

export default HomePage;
