import { Outlet } from "react-router-dom";
import React from "react";

import Toolbar from "../components/toolbarComponent";
import { ListContext } from "../contexts/listContext";


export default function Baseview() {

   return (

      <div >
         <ListContext>
            <div className="flex w-full">  
               <div className="m-4">
                  <Toolbar />
               </div>
               <div className="m-4">
                  <Outlet />
               </div>
            </div>
         </ListContext>
      </div>
   );
}
