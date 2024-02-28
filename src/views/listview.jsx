import { useParams } from "react-router-dom";
import ListComponent from "../components/listComponent";

export default function Listview() {
   const idParam = useParams()
   const id = idParam.listId

   return(
      <div>
         <ListComponent  id={idParam} />
      </div>
   )
}

