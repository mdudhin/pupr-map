import * as React from "react";

import logo from "../../assets/logo.png";

const Footer: React.FC = () => {
  const styleFooter = "bg-indigo text-white p-4";

  const leftColumns = [
    {
      title: "About Us",
      items: [
        {
          content: (
            <p className="w-96">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              ratione obcaecati molestiae vitae consequatur est exercitationem
              sapiente, aspernatur laborum ipsum incidunt fuga, sed rem. Sunt
              debitis aliquam dignissimos suscipit aspernatur.
            </p>
          ),
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
              Jl. Kapten A. Rivai No.1251, Sungai Pangeran, Kec. Ilir Tim. I,
              Kota Palembang, Sumatera Selatan 30127
            </p>
          ),
        },
        { content: <p>Phone: {`(0711) 312272`}</p> },
      ],
    },
    {
      title: "Privacy & Security",
      items: [
        { content: <a href="/terms-of-service">Privacy Policy</a> },
        { content: <a href="/contact-us">Copyright Notice</a> },
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
