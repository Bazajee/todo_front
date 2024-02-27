import { useState } from "react";
export default function Task({ stateValue, dataValue }) {
   const [state, setState] = useState(stateValue);
   const [data, setData] = useState(dataValue);

   function handleClick() {
      setState(!state);
   }

   return state ? (
      <button onClick={handleClick} className=" p-2 rounded bg-lime-400">
         undo
      </button>
   ) : (
      <button onClick={handleClick} className="p-2">
         do
      </button>
   );
}
