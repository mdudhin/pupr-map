import React from "react";
import bg from "../../assets/bg.mp4";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col h-screen w-full justify-center items-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={bg}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <h1 className="text-white font-bold text-5xl mb-20 text-center">
          Command Center <br /> BBWS Sumatera VIII
        </h1>
        <div className="flex flex-row gap-9">
          <div className="flex flex-col items-center gap-1">
            <img
              src={logo}
              className="shadow-md rounded-md w-16 cursor-pointer"
            />
            <span className="text-white font-semibold w-16 text-center text-xs">
              WRDC
            </span>
          </div>
          <div
            className="flex flex-col items-center gap-1 cursor-pointer"
            onClick={() => navigate("/visiting-point")}
          >
            <img src={logo} className="shadow-md rounded-md w-16 " />
            <span className="text-white font-semibold w-16 text-center text-xs">
              Visiting Point
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img
              src={logo}
              className="shadow-md rounded-md w-16 cursor-pointer"
            />
            <span className="text-white font-semibold w-17 text-center text-xs">
              E Hidrologi
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img
              src={logo}
              className="shadow-md rounded-md w-16 cursor-pointer"
            />
            <span className="text-white font-semibold w-16 text-center text-xs">
              Early Warning System
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img
              src={logo}
              className="shadow-md rounded-md w-16 cursor-pointer"
            />
            <span className="text-white font-semibold w-16 text-center text-xs">
              IGT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;