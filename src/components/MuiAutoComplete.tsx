import { Label } from '@mui/icons-material'
import { Autocomplete, Box, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

function MuiAutoComplete() {
    interface skillType{
        id:string,
        label:string
    }
    let data = ['html', 'css', 'js', 'react']
    let dataofObject=data.map((item,i)=>{
        return {id:item+i,label:item}
    })
    let [value,setValue]=useState<string|null>(null)
    let [skillOption,setSkillOption] =useState<skillType|null>(null)
    function changeHandler(event: React.SyntheticEvent, value: string | null)
    {
        setValue(value)
    }
    return (
        <Stack>
              {JSON.stringify(value,null,4)}
              {JSON.stringify(skillOption,null,4)}
            <Box>
                {/* //normal -auto complete */}
                <Autocomplete options={data} renderInput={(props) => {
                    return <TextField {...props} label="subject" />
                }} />
            </Box>
            <Box sx={{marginTop:"30px"}}>
              
                {/* //you can add non mention text also by using solo props */}
                <Autocomplete options={data} renderInput={(prop)=>{
                    return <TextField {...prop} label="subject" />
                }}
                freeSolo
                />
            </Box>
            {/* //handle value */}
            <Box sx={{marginTop:"30px"}}>
               <Autocomplete options={data} renderInput={(props)=>{
                return <TextField {...props} label="subject"/>
               }}
               value={value}
               onChange={changeHandler}
               freeSolo/>
            </Box>

            {/* //handle array of object */}
            <Box sx={{marginTop:"30px"}}>
               <Autocomplete options={dataofObject} renderInput={(props)=>{
                return <TextField {...props} label="subject"/>
               }}
               value={skillOption}
               onChange={(e:any,newvalue:skillType|null)=>{
                setSkillOption(newvalue)
               }}
            />
            </Box>

        </Stack>

    )
}

export default MuiAutoComplete