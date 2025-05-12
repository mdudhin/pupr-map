import Dashboard from "../features/dashboard";
import DetailPage from "../features/detail";
import GalleryPage from "../features/gallery";
import HomePage from "../features/home";
import PublicInformationPage from "../features/public-information";
import PublicInformationDetail from "../features/public-information/detail";
import Layout from "../layout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/informasi-publik",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PublicInformationPage />,
      },
      {
        path: "detail",
        element: <PublicInformationDetail />,
      },
    ],
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
]);
