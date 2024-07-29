import { Outlet, useLocation } from "react-router-dom";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import logo from "../assets/logo.png";

const LayoutUser = () => {
  const location = useLocation();
  const { pathname } = location;
  console.log(location);

  return (
    <div
      className={`flex flex-col w-full ${
        pathname === "/visiting-point" ? "overflow-hidden" : ""
      } h-screen`}
    >
      <Navbar
        shadow="shadow-lg"
        maxWidth="w-full"
        logoIcon={<img src={logo} className="w-8 shadow-sm rounded-sm" />}
        logoText="Direktorat Jendral Sumber Daya Air"
        linksPosition="center"
      />
      <div className="flex-grow">
        <Outlet />
      </div>
      {pathname !== "/visiting-point" && <Footer />}
    </div>
  );
};

export default LayoutUser;
