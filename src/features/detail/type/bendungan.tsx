import { useEffect, useState } from "react";

import { Bendungan } from "../../../services/type";
import bendungan from "../../../assets/bendungan.jpg";
import { getMockData } from "../../../services/mock-data";
import { useParams } from "react-router-dom";

const ProjectBendungan = () => {
  const { id } = useParams();
  const [data, setData] = useState<Bendungan | undefined>(undefined);

  useEffect(() => {
    const response: any = getMockData(id as string);
    setData(response);
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const colGenerator = (item: string) => {
    if (item === "BENDUNGAN") {
      return "col-span-2";
    }
    return "";
  };

  const { sections, paket, timeline } = data;

  return (
    <div
      className="bg-gray-50 p-6"
      style={{
        backgroundImage: `url(${bendungan})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "5px",
      }}
    >
      <div className="grid grid-cols-4 gap-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`${colGenerator(
              section.title
            )} rounded-lg bg-white shadow-md`}
          >
            <div className="p-6 bg-indigo rounded-t-lg">
              <h2 className="text-xl font-semibold text-white">
                {section.title}
              </h2>
            </div>

            <div className="p-6">
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <span className="font-bold">{item.label}</span>:{" "}
                    {item.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="col-span-4  bg-white rounded-lg shadow-md">
          <div className="p-6 bg-indigo rounded-t-lg">
            <h2 className="text-xl font-semibold mb-4 text-white">PAKET</h2>
          </div>
          <div className="p-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-2 border-b-2">Paket</th>
                  <th className="p-2 border-b-2">Kontrak</th>
                  <th className="p-2 border-b-2">Ruang Lingkup Pekerjaan</th>
                </tr>
              </thead>
              <tbody>
                {paket.map((item) => (
                  <tr key={item.id}>
                    <td className="p-2 border-b">{item.id}</td>
                    <td className="p-2 border-b">{item.kontrak}</td>
                    <td className="p-2 border-b">{item.ruang_lingkup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-4 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            MASA PELAKSANAAN ({timeline.start} - {timeline.end})
          </h2>
          <div className="flex space-x-1">
            {timeline.milestones.map((milestone, index) => (
              <div
                key={index}
                className={`${milestone.color} flex-1 h-6`}
              ></div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            {timeline.milestones.map((milestone, index) => (
              <span key={index}>{milestone.year}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBendungan;
