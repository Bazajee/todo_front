import { NavLink } from "react-router-dom";
import listContextWrapper from "../contexts/listContext";
export default function Toolbar({ taskList }) {
   const { data, isLoading, error } = listContextWrapper();

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
         <span></span>
         <ul>
         { isLoading ? (
               <p>is isLoading</p>
            ) : (
               data.map((listObj) => <li key={listObj.id} className="hover:text-lime-400">
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
               </li>
               )
            )}                               
         </ul>
      </div>
   );
}
