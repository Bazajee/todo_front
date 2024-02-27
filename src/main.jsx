import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


import { createBrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider} from 'react-query';

import Homeview from "./views/homeview.jsx";
import Listview from "./views/listview.jsx";
import ErrorPage from "./error-pages.jsx";
import Baseview from "./views/baseview.jsx";

const queryClient = new QueryClient();



const router = createBrowserRouter([
   {
      path: "",
      element: <Baseview />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "",
            element: <Homeview />
         },
         {
            path: "/list/:listId",
            element: <Listview />,
         },
      ]
   }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient} >
         <RouterProvider router={router}/>
      </QueryClientProvider>
   </React.StrictMode>
);
