import React from 'react'
 
import { Box, Button } from '@mui/material'
import { useTodo } from './TodoContext'
 
function List() {
    let x=useTodo()
    return (
        <>
           {x!.todo.map((item)=>{
            return <Box>
                {item.text}
                <Button variant='contained' color='error' onClick={()=>{
                    x?.deleteHandler(item.id)
                }}>delete</Button>
            </Box>
           })}
        </>
    )
}

export default List