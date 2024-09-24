import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useToken } from "../hooks/useToken";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();

  const { token } = useToken();

  const authProtected = ["/login", "/register"];
  const tokenProtected = [
    "/admin",
    "/admin/peraturan",
    "/admin/peraturan/detail/:action",
  ];

  if (authProtected.includes(pathname)) {
    if (token) return <Navigate to="/" />;
  }

  if (tokenProtected.includes(pathname)) {
    if (!token) return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
