import Dashboard from "../features/dashboard";
import DashboardPage from "../features/admin/dashboard";
import DataPointPage from "../features/admin/data-point";
import DetailPage from "../features/detail";
import GalleryPage from "../features/gallery";
import HomePage from "../features/home";
import Layout from "../layout";
import LayoutAdmin from "../layout/layout-admin";
import LoginPage from "../features/auth/login";
import ProtectedRoutes from "./protectedRoutes";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/visiting-point",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "detail/:type/:id",
        element: <DetailPage />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
    ],
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/admin",
        element: <LayoutAdmin />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: "data-point",
            element: <DataPointPage />,
          },
        ],
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
