import * as React from "react";

import logo from "../../assets/logo.png";

const Footer: React.FC = () => {
  const styleFooter = "bg-indigo text-white p-4";

  const leftColumns = [
    {
      title: "Dikelola Oleh",
      items: [
        {
          content: <p className="w-96">UNIT SISDA BBWS SUMATERA VIII</p>,
        },
      ],
    },
  ];

  const rightColumns = [
    {
      title: "Contact Us",
      items: [
        {
          content: (
            <p className="w-72">
              Jl. Soekarno Hatta No.869, Talang Klp., Kec. Alang-Alang Lebar,
              Kota Palembang, Sumatera Selatan 30153
            </p>
          ),
        },
        { content: <p>Phone: {`(0711) 414019`}</p> },
      ],
    },
    {
      title: "Privacy & Security",
      items: [
        { content: <a>Privacy Policy</a> },
        { content: <a>Copyright Notice</a> },
      ],
    },
  ];

  const bottomColumns = [
    {
      items: [
        {
          content: (
            <div>
              Copyright 2024, Kementerian Pekerjaan Umum dan Perumahan Rakyat
              Republik Indonesia
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <footer className={`${styleFooter}`}>
      <div className="flex justify-around py-5 border-b-[1px]">
        <img src={logo} className="shadow-2xl w-36 h-36" />
        <div className="flex justify-start items-start gap-5">
          {leftColumns.map((leftColumn, columnIndex) => (
            <div key={columnIndex} className="flex flex-col items-start mx-4">
              <div className="font-bold mb-2">{leftColumn.title}</div>
              {leftColumn.items.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-2">
                  {item.content}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-end items-start gap-5">
          {rightColumns.map((rightColumn, columnIndex) => (
            <div key={columnIndex} className="flex flex-col items-start mx-4">
              <div className="font-bold mb-2">{rightColumn.title}</div>
              {rightColumn.items.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-2">
                  {item.content}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={`flex flex-col justify-center pt-5 items-center`}>
        {bottomColumns.map((bottomColumn, index) => (
          <div key={index} className="flex flex-col items-center">
            {bottomColumn.items.map((item, itemIndex) => (
              <div key={itemIndex} className="mb-2">
                {item.content}
              </div>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
