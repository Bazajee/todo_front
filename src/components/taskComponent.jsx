import { useState, useContext } from "react";

export default function Task(props) {

   const task = props;
   const [state, setState] = useState(task.props.state);
   const [data, setData] = useState(task.props.body);



   function handleClick() {
      setState(!state);
   }

   function handleColor() {
      return state ? " p-2 rounded bg-lime-400" : " p-2 rounded "
   }

   return (

      <div className="flex p-2 ">
         <button
            
            onClick={handleClick}
            className={ `p-2 ${state ? 'rounded bg-lime-400' : ''}`}
         >
            {state ? 'undo' : 'do'}
         </button>
         <p className="p-2">{data}</p>
      </div>

   )
}
