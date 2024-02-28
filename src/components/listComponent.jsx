import { useContext } from "react";
import { listContextInstance } from "../contexts/listContext";
import TaskComponent from "./taskComponent";

export default function ListComponent(props) {
   const { tasks, loading } = useContext(listContextInstance);
   const id = parseInt(props.id.listId);

   if (loading) {
      return (
         <div>
            <p>{loading}</p>
         </div>
      );
   } else {
      const selectedTask = tasks.filter((task) => task.taskList_id === id);

      return (
         <div className="rounded border-solid border-2">
            <ul>
               {selectedTask.map((task) => (
                  <li key={parseInt(task.task_id)}>
                     <TaskComponent  props={task} />
                  </li>
               ))}
            </ul>
         </div>
      );
   }
}
