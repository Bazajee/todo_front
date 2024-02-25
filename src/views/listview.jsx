import { useParams } from "react-router-dom";
import listContextWrapper from "../contexts/listContext";
import { useEffect } from "react";
export default function Listview() {
   const { data, isLoading, error } = listContextWrapper();
   const idParam = useParams();
   const name = "listview";
   console.log(isLoading, data);

   if (isLoading) {
      return (
         <div>
            <h1>{name} </h1>
            <p>{isLoading}</p>
         </div>
      );
   } else {
      const listObject = data.find(
         (obj) => obj.id === parseInt(idParam.listId)
      );
      console.log("obj", listObject, idParam.listId);
      return (
         <div>
            <ul >
               {listObject.list.map((task) => (
                  <li className="flex p-2">
                     {task.state ? (
                        <button className=" rounded bg-lime-400">do</button>
                     ) : (
                        <button className="">do</button>
                     )}
                     <p>{task.body}</p>
                  </li>
               ))}
            </ul>
         </div>
      );
   }
}
