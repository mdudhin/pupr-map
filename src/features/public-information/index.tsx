import { CustomTabs } from "../../components/tabs";
import bgScreen from "../../assets/bendungan.jpg";
import { tab1, Peraturan, tab2 } from "../../services/informasi-data";
import { useNavigate } from "react-router-dom";

const PublicInformationPage = () => {
  const navigate = useNavigate();
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
          <CustomTabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
};

export default PublicInformationPage;
