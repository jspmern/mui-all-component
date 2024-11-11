import { Face } from '@mui/icons-material'
import { Avatar, Box, Chip, Paper, Stack } from '@mui/material'
import React, { useState } from 'react'

function Muichip() {
    let [data,setData]=useState([{id:1,label:"html"},{id:2,label:"css"},{id:3,label:"js"},{id:4,label:"ract"}])
    function deleteHandler(data:string)
    {
     setData((pre)=>{
        return pre.filter((item)=>{
            return item.label !==data
        })
     })
   
    }
    return <>
    <Box sx={{width:"100%",height:"100vh",p:5,mt:5}}>
        <Stack direction={'row'} spacing={3}>
        <Chip label="click"/>
        <Chip label="click" color='success'/>
        <Chip label="hello" color='secondary' size='medium'/>
        <Chip label="hello" color="info" size='small' onClick={()=>alert('hello how are you')}/>
        <Chip label="click me !" color='error'  onDelete={()=>{
            alert('hii i am delete handler')
        }} onClick={()=>alert('hello i am click handler')}/>

        <Chip label="utsav" color='primary' icon={
            <Face/>
        }/>

        <Chip 
         avatar={<Avatar >UJ</Avatar>} 
         label="utsav jha"
         color='primary'
         variant='outlined'/>
        </Stack>

        <Stack direction={'row'} >
            <Paper sx={{p:2,mt:5,minWidth:"400px"}}>
          {data.map((item)=>{
            return <Chip  
            label={item.label} 
            onDelete={()=>{
                deleteHandler(item.label)
            }}/>
          })}
          </Paper>
        </Stack>
    </Box>
    </> 
}

export default Muichip