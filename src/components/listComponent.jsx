import { useParams } from "react-router-dom";
import {ListContext} from "../contexts/listContext";
import { useContext } from "react";
import { listContextInstance } from "../contexts/listContext";
import TaskComponent from "./taskComponent";




export default function ListComponent(props) {

   const { lists, loading } = useContext(listContextInstance);
   const id = props.id

   if (loading) {
      return (
         <div>
            
            <p>{loading}</p>
         </div>
      );
   } else {
      const listObject = lists.find(
         (obj) => obj.id === parseInt(id.listId)
      );
      return (
         <div className="rounded border-solid border-2">
            <ul >
               {listObject.list.map((task) => (
                  <li key={task.task_id} className="flex p-2 ">
                     <TaskComponent stateValue={task.state} />

                     <p className="p-2">{task.body}</p>
                  </li>
               ))}
            </ul>
         </div>
      );
   }
}
