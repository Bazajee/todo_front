import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Root from "./routes/root.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homeview from "./views/homeview.jsx";
import Listview from "./views/listview.jsx";
import ErrorPage from "./error-pages.jsx";
import Baseview from "./views/baseview.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<div> from router <Baseview /></div>),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: (
          <div>
            in basebiew
            <Homeview />
          </div>
        ),
      },
    ],
  },
  {
    path: "/list/:listname",
    element: <Listview />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
