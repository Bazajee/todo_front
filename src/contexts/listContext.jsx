import { createContext, useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from "react-query";
import { getTaskLists, getTasks } from "../data";


export  const listContextInstance = createContext();

export  function ListContext({children}) {
   const [lists, setLists]= useState([])
   const [tasks, setTasks]= useState([])
   const [loading, setLoading] = useState(true)

   const fetchLists = useQuery('tasks', getTaskLists, {refetchOnWindowFocus: false})
   const fetchTasks = useQuery('tasks', getTasks, {refetchOnWindowFocus: false})

   console.log('beforeEffect' ,fetchLists.isLoading, fetchLists.isLoading , loading)
   // click => button change => post => changebutton (if not error button not change => update use state in context)
   useEffect( ()=> {
      !fetchLists.isLoading && setLists(fetchLists.data)
      !fetchTasks.isLoading && setTasks(fetchTasks.fata)
      if (!fetchLists.isLoading && !fetchLists.isLoading) {setLoading(false)}

      console.log('effect', fetchLists.isLoading, fetchLists.isLoading, loading)
   }, [fetchLists.isLoading, fetchLists.isLoading])



   !loading && console.log('react', loading, lists, tasks)
   

   return(
      <listContextInstance.Provider value={{lists, loading}}>
         {children}
      </listContextInstance.Provider>
   )
}

