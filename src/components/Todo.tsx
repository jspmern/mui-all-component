import { Box, Button, Stack, TextField } from '@mui/material'
import React, { useContext, useReducer, useState } from 'react'
import List from './List'
import { TodoType } from './utilits'
import { useTodo } from './TodoContext'
function Todo() {
  let x=useTodo()
  let [value,setValue]=useState<string>('')
 
  function changeHandler(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
  {
    setValue(event.target.value)
  }
  function clickHandler()
  {
    let obj:TodoType={
      id:Math.random(),
      text:value
    }
    console.log('hello i am click handler ',x)
    x?.addHandler(obj)
    setValue('')
   
  }

  return (
        <>
               
                <Stack direction={'column'} spacing={2} >
                  <Box width={'300px'}>
                  <TextField type="text" onChange={changeHandler} label="enter your text"  value={value}/> 
                  <Button onClick={clickHandler}  color='warning' variant='contained'> add</Button>
                  </Box>
                  <hr/>
                  <br/>
                  <List/>
                 </Stack>
                 
        </>
  )
}

 

export default Todo