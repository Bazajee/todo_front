import { useParams } from "react-router-dom"
export default function Listview () {
    const params = useParams()
    const name = 'listview'
   return (
       <div>
           <h1>{name} </h1>
           <p>{params.listname}</p>
       </div>
   )
}