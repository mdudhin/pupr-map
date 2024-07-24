import DetailPage from "../features/detail";
import HomePage from "../features/home";
import Layout from "../layout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "detail/:id",
        element: <DetailPage />,
      },
    ],
  },
]);
