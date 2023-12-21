import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about",
        element: <div>path - /about</div>,
        errorElement: <div>Error in about</div>,
      },
      {
        path: "/contact",
        element: <div>path - /contact</div>,
        errorElement: <div>Error in about</div>,
      },
      {
        path: "/prices",
        element: <div>path - /prices</div>,
        errorElement: <div>Error in about</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
