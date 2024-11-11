import { Box ,TextField,MenuItem} from '@mui/material'
import React, { useState } from 'react'

function MuiSelect() {
    // let [country,setCountry]=useState("")
    
    // function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
    // {
    //     setCountry(event.target.value)
    // }
    let [country,setCountry]=useState<string[]>([])
    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
    {
        let {value}=event.target
        setCountry(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
          );
    }
  return (
     <Box width={'250px'}>
        {JSON.stringify(country,null,4)}
        {/* //single slect dropdown */}
       {/* <TextField label="select country" select value={country} onChange={handleChange} fullWidth>
        <MenuItem value="in">India</MenuItem>
        <MenuItem value="us">USA</MenuItem>
        <MenuItem value="ca">Canada</MenuItem>
       </TextField> */}

       {/* //multiple drop down */}
       {/* //here we can able to use error , helperText,size all props of textField */}
       <TextField
        label="select country" 
        select
         value={country} 
         onChange={handleChange} 
         fullWidth
         SelectProps={{
            multiple:true
         }}
         size='small'
         color='secondary'
         helperText="multiple select"
         error>

        <MenuItem value="in">India</MenuItem>
        <MenuItem value="us">USA</MenuItem>
        <MenuItem value="ca">Canada</MenuItem>
       </TextField>
       
     </Box>

     //insted of comma we can show checkbox and chip also
  )
}

export default MuiSelect