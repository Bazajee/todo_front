import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { listContextInstance } from "../contexts/listContext";

export default function Toolbar() {

   const { lists, loading } =  useContext(listContextInstance);
   
   return (
      <div>
         <div className=" text-5xl font-bold hover:text-lime-400">
            <NavLink
               to={`/`}
               className={({ isActive }) => {
                  return isActive ? "hover:text-lime-400 text-lime-400 " : "";
               }}
            >
               Hello
            </NavLink>
         </div>
         <ul>
         { loading ? (
               <p>is loading</p>
            ) : (
               lists.map((listObj) => <li key={listObj.id} className="hover:text-lime-400">
                  <NavLink 
                     to={`/list/${listObj.id}`}
                     className={({ isActive }) => {
                     return isActive
                        ? "hover:text-lime-400 text-lime-400 "
                        : "";
                     }}
                  >
                  {listObj.name}
                  </NavLink> 
                  {}
                  {/* {listObj.list.map((task) => )} */}
               </li>,
               )

            )}                               
         </ul>
      </div>
   );
}
