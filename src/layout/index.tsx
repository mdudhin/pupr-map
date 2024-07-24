import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
import logo from "../assets/logo.png";

const LayoutUser = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navbar
        shadow="shadow-lg"
        maxWidth="w-full"
        logoIcon={<img src={logo} className="w-8 shadow-sm rounded-sm" />}
        logoText="Direktorat Jendral Sumber Daya Air"
        linksPosition="center"
      />
      <div className="flex-grow z-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutUser;
