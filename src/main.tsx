import "./styles/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "./components/toast";
import { TokenProvider } from "./hooks/useToken";
import { router } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TokenProvider>
      <RouterProvider router={router} />
      <Toaster richColors closeButton />
    </TokenProvider>
  </React.StrictMode>
);
