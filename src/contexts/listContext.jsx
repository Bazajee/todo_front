import React, { createContext, useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from "react-query";
import { getTaskLists, getTasks } from "../data";


export  const listContextInstance = createContext();

export  function ListContext({children}) {
   const [lists, setLists]= useState([])
   const [tasks, setTasks]= useState([])
   const [loading, setLoading] = useState(true)

   const fetchLists = useQuery('lists',getTaskLists, {refetchOnWindowFocus: false})
   const fetchTasks = useQuery('tasks', getTasks, {refetchOnWindowFocus: false})


   useEffect( ()=> {
      !fetchLists.isLoading && setLists(fetchLists.data)
      !fetchTasks.isLoading && setTasks(fetchTasks.data)
      if (!fetchLists.isLoading && !fetchLists.isLoading) {setLoading(false)}
   }, [fetchLists.isLoading, fetchLists.isLoading])
   


   return(
      <listContextInstance.Provider value={{lists, tasks, loading}}>
         {children}
      </listContextInstance.Provider>
   )
}

