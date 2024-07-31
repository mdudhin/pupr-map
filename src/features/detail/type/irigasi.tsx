import { useEffect, useState } from "react";

import { Irigasi } from "../../../services/type";
import bendungan from "../../../assets/bendungan.jpg";
import { getMockData } from "../../../services/mock-data";
import { useParams } from "react-router-dom";

const ProjectIrigisi = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<Irigasi | null>(null);

  useEffect(() => {
    const response: any = getMockData(id as string);
    setData(response);
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { sections, phases } = data;

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
            className="col-span-4  bg-white rounded-lg shadow-md"
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

        {phases.map((phase, index) => (
          <div key={index} className="col-span-4 bg-white rounded-lg shadow-md">
            <div className="p-6 bg-indigo rounded-t-lg">
              <h2 className="text-xl font-semibold text-white">
                {phase.title}
              </h2>
            </div>
            <div className="p-6">
              {phase.paket.map((paket, idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">{paket.label}</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {paket.details.map((detail, i) => (
                      <li key={i}>
                        <span className="font-bold">{detail.label}</span>:{" "}
                        {detail.value}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectIrigisi;
