import { CustomTabs } from "../../components/tabs";
import bgScreen from "../../assets/bendungan.jpg";
import { tab1, Peraturan, tab2 } from "../../services/informasi-data";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PublicInformationPage = () => {
  const navigate = useNavigate();
  const allData: Peraturan[] = [...tab1, ...tab2];
  const [searchData, setSearchData] = useState<Peraturan[]>([]);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value.toLowerCase();

    setSearch(title);
  };

  const handleSearch = () => {
    const filteredData = allData.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
    setSearchData(filteredData);
  };

  const handleClear = () => {
    setSearchData([]);
    setSearch("");
  };

  const tabs = [
    {
      trigger: <span>PERATURAN</span>,
      value: "peraturan",
      content: (
        <ol className="m-5 space-y-2 flex flex-col items-start">
          {tab1.map((item: Peraturan, index: number) => (
            <button
              key={item.id}
              className="cursor-pointer"
              onClick={() =>
                navigate("detail", {
                  state: { data: item },
                })
              }
            >
              {index + 1}. {item.title}
            </button>
          ))}
        </ol>
      ),
    },
    {
      trigger: <span>PERUNDANG-UNDANGAN</span>,
      value: "perundang-undangan",
      content: (
        <ol className="m-5 space-y-2 flex flex-col items-start">
          {tab2.map((item: Peraturan, index: number) => (
            <button
              key={item.id}
              className="cursor-pointer"
              onClick={() =>
                navigate("detail", {
                  state: { data: item },
                })
              }
            >
              {index + 1}. {item.title}
            </button>
          ))}
        </ol>
      ),
    },
  ];
  return (
    <div className="relative flex flex-col">
      <img src={bgScreen} alt="bg" className="w-full h-full object-cover" />

      <div className="absolute top-0 left-0 w-full h-full flex bg-black bg-opacity-50 p-10">
        <div className="bg-white opacity-95 w-full p-6 rounded flex flex-col h-full overflow-y-auto">
          <h1 className="text-center text-3xl mb-10">INFORMASI PUBLIK</h1>

          <div className="flex flex-row gap-5 mb-10">
            <input
              type="text"
              placeholder="Search by title..."
              value={search}
              onChange={onChangeSearch}
              className="p-2 border border-gray-300 rounded w-full"
            />
            <button
              type="button"
              className="bg-neutral-950 hover:bg-neutral-800 text-white p-2 rounded w-72"
              onClick={handleSearch}
            >
              Cari
            </button>
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-200 text-black p-2 rounded w-72"
              onClick={handleClear}
            >
              Bersihkan
            </button>
          </div>

          {searchData.length >= 1 ? (
            <ol className="mx-5 space-y-2 flex flex-col items-start">
              {searchData.map((item: Peraturan, index: number) => (
                <button
                  key={item.id}
                  className="cursor-pointer"
                  onClick={() =>
                    navigate("detail", {
                      state: { data: item },
                    })
                  }
                >
                  {index + 1}. {item.title}
                </button>
              ))}
            </ol>
          ) : (
            <CustomTabs tabs={tabs} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicInformationPage;
