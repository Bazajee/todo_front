import { Outlet } from "react-router-dom";
import React from "react";

import Toolbar from "../components/toolbar";


export default function Baseview() {

   return (

      <div >
         <div className="flex w-full">  
            <div className="m-4">
               <Toolbar />
            </div>
            <div className="m-4">
               <Outlet />
            </div>
         </div>
      </div>
   );
}
