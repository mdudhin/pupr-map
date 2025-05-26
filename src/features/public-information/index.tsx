import { Peraturan, tab1, tab10, tab11, tab2, tab3, tab4, tab5, tab6, tab7, tab8, tab9 } from "../../services/informasi-data";

import { CustomTabs } from "../../components/tabs";
import bgScreen from "../../assets/bendungan.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PublicInformationPage = () => {
  const navigate = useNavigate();
  const allData: Peraturan[] = [...tab1, ...tab2, ...tab3, ...tab4, ...tab5, ...tab6, ...tab7, ...tab8, ...tab9, ...tab10, ...tab11];
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
      trigger: <span>STUDI BBWS SUMATERA VIII</span>,
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
      trigger: <span>SKEMA SUNGAI</span>,
      value: "skema-sungai",
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
    {
      trigger: <span>DOKUMEN RBO</span>,
      value: "rbo",
      content: (
        <ol className="m-5 space-y-2 flex flex-col items-start">
          {tab3.map((item: Peraturan, index: number) => (
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
      trigger: <span>MANAJEMEN RESIKO</span>,
      value: "manajemen-resiko",
      content: (
        <ol className="m-5 space-y-2 flex flex-col items-start">
          {tab4.map((item: Peraturan, index: number) => (
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
      trigger: <span>SOP</span>,
      value: "sop",
      content: (
        <ol className="m-5 space-y-2 flex flex-col items-start">
          {tab5.map((item: Peraturan, index: number) => (
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
      trigger: <span>SKEMA MODERNISASI</span>,
      value: "skema-modernisasi",
      content: (
        <ol className="m-5 space-y-2 flex flex-col items-start">
          {tab6.map((item: Peraturan, index: number) => (
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
      trigger: <span>RAAT</span>,
      value: "raat",
      content: (
        <ol className="m-5 space-y-2 flex flex-col items-start">
          {tab7.map((item: Peraturan, index: number) => (
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
      trigger: <span>JARINGAN IRIGASI</span>,
      value: "jaringan-irigasi",
      content: (
        <ol className="m-5 space-y-2 flex flex-col items-start">
          {tab8.map((item: Peraturan, index: number) => (
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
      trigger: <span>PROSES LELANG</span>,
      value: "proses-lelang",
      content: (
        <ol className="m-5 space-y-2 flex flex-col items-start">
          {tab9.map((item: Peraturan, index: number) => (
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
      trigger: <span>EPAKSI</span>,
      value: "epaksi",
      content: (
        <ol className="m-5 space-y-2 flex flex-col items-start">
          {tab10.map((item: Peraturan, index: number) => (
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
          {tab11.map((item: Peraturan, index: number) => (
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
