export type TodoType={
    id:number,
    text:string,
  }
  export type TodoDataType={
    todo:TodoType[]
  }
  export type actionType={type:string,payload:any}  

  export type TodoContextType={
    addHandler:(arg:TodoType)=>void
    deleteHandler:(arg:number)=>void
  }&TodoDataType