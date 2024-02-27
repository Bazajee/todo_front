import { useParams } from "react-router-dom";
import ListComponent from "../components/listComponent";

export default function Listview() {
   const idParam = useParams();
   return(
      <div>
         <ListComponent id={idParam}/>
      </div>
   )
}

