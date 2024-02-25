import { createContext } from "react";
import { useQuery } from "react-query";
import { getTaskLists } from "../data";

import Toolbar from "../components/toolbar";

const listContext = createContext();

export default function listContextWrapper() {
   const { data, isLoading, error } = useQuery("tasks", async () => {
      const response = await getTaskLists();
      return response;
   });
   console.log(isLoading, data);

   return { data, isLoading, error }

}
