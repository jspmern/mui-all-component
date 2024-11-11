import { TodoType } from "../components/utilits";
import { add, del } from "./Constant";

//this is add action creator handlers
export function addActionCreator(arg:TodoType)
{
    return { type :add,payload:arg}
}
//this is deleteAction creator
export function deleteActionCreator(arg:number)
{
    return {type:del,payload:arg}
}