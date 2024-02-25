import { Outlet } from "react-router-dom";
import React from "react";

import Toolbar from "../components/toolbar";

import { useQuery} from 'react-query';
import { getTaskLists } from "../data";





export default function Baseview() {
   
   // const { data, isLoading, error } = useQuery(
   //    'tasks', 
   //    async () => {
   //       const response = await getTaskLists();

   //       return response;
   //    }
   // )
   // console.log(isLoading, data)

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
