import { Outlet, NavLink } from "react-router-dom";
// import  { useQuery } from 'react-query';
import { getTaskLists } from "../data";

export default function Toolbar ({taskList}) {
    // const { data, isLoading, error } = useQuery('tasks', getTaskLists)
    // console.log(isLoading, data)


    return (
        <div>
            <div className=" text-5xl font-bold hover:text-lime-400" >
                <NavLink 
                    to={`/`}
                    className={({isActive}) => {
                            return isActive ? 'hover:text-lime-400 text-lime-400 ' : ''
                        }} 
                
                >Hello</NavLink>
            </div>
            <span></span>
            <ul>
                <li className="hover:text-lime-400">
                    <NavLink 
                    to={`/list/1`}
                    className={({isActive}) => {
                            return isActive ? 'hover:text-lime-400 text-lime-400 ' : ''
                        }} 
                    >List 1</NavLink>
                </li>
                <li className="hover:text-lime-400">
                    <NavLink 
                        to={`/list/2`} 
                        className={({isActive}) => {
                            return isActive ? 'hover:text-lime-400 text-lime-400' : ''
                        }} 
                    >List 2</NavLink>
                </li>
                <li className="hover:text-lime-400">
                    <NavLink 
                    to={`/list/3`}
                    className={({isActive}) => {
                            return isActive ? 'hover:text-lime-400 text-lime-400' : ''
                        }} 
                    >List 3</NavLink>
                </li>
            </ul>
            <div>
                {  }
            </div>
        </div>
    )

}