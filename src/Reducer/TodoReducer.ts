import { add, del } from "../action/Constant"
import { actionType, TodoDataType } from "../components/utilits"

export function reducer(state:TodoDataType,action:actionType):TodoDataType
{
  if(action.type==add)
  {
    return  {...state,todo:[...state.todo,action.payload]}
  }
  else if(action.type==del)
  {
    return {...state,todo:state.todo.filter((item)=>{
      return item.id !=action.payload
    })}
  }
  else{
    return state
  }
}