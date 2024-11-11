import React, { createContext, ReactNode, useContext, useReducer } from 'react'
import {  TodoContextType, TodoDataType, TodoType } from './utilits'
import { reducer } from '../Reducer/TodoReducer'
import { addActionCreator, deleteActionCreator } from '../action/TodoActionCreator'
let todoContext = createContext<TodoContextType | null>(null)

type BodyContext={
    children:ReactNode
}
function TodoContext(props:BodyContext) {
    let initaialState: TodoDataType = {
        todo: []
    }
    let [state, dispatch] = useReducer(reducer, initaialState)

    function deleteHandler(id: number) {
        dispatch(deleteActionCreator(id))
    }
    function addHandler(arg: TodoType) {
        
        dispatch(addActionCreator(arg))
    }
    return <todoContext.Provider value={{ ...state, deleteHandler, addHandler }}>
              {props.children}
        </todoContext.Provider>
}

export let useTodo=()=>{
    return useContext(todoContext)
}
export default TodoContext