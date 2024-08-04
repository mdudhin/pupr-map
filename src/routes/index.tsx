import Dashboard from "../features/dashboard";
import DetailPage from "../features/detail";
import GalleryPage from "../features/gallery";
import HomePage from "../features/home";
import Layout from "../layout";
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
]);
