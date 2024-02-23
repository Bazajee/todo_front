import { Outlet } from "react-router-dom";
export default function Baseview() {
   const name = "Baseview";
   return (
      <div>
         <Outlet />
         <h1>{name} </h1>
      </div>
   );
}
