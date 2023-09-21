import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormPengajuanPage from "./components/FormPengajuanPage";
import Homepage from "./components/HomePage";
import Loginpage from "./pages/LoginPage";
import DashboardAdmin from "./pages/DashboardAdmin";
import AdminDetailPengajuan from "./pages/AdminDetailPengajuan";
import UserDetailPengajuan from "./pages/UserDetailPengajuan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <Homepage />,
      },
      {
        path: "/formpengajuan",
        element: <FormPengajuanPage />,
      },
      {
        path: "/login",
        element: <Loginpage />,
      },
      {
        path: "/admin",
        element: <DashboardAdmin />,
      },
      {
        path: "/admin/detail",
        element: <AdminDetailPengajuan />,
      },
      {
        path: "/detail",
        element: <UserDetailPengajuan />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
