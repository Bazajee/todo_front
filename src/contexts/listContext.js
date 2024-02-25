import { createContext } from "react";
import { useQuery } from "react-query";
import { getTaskLists } from "../data";

import Toolbar from "../components/toolbar";

const listContext = createContext();
// add useState for implement reactivity
export default function listContextWrapper() {
   const { data, isLoading, error } = useQuery("tasks", async () => {
      const response = await getTaskLists();
      return response;
   });
   return { data, isLoading, error }
}
