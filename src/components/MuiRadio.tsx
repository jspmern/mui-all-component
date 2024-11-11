import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import React, { useState } from 'react'
function MuiRadio() {
    let [radio,setRadio]=useState('female')
  return (
// <FormControl>
//     {JSON.stringify(radio,null,4)}
//     <FormLabel id="radio-button-group">Gender</FormLabel>
//     <RadioGroup
//       aria-labelledby="demo-radio-buttons-group-label"
//       defaultValue={radio}
//       name="radio-buttons-group"
//       onChange={(e)=>{setRadio(e.target.value)}}
//     >
//        <FormControlLabel value="female" control={<Radio />} label="Female" /> 
//        <FormControlLabel value="male" control={<Radio />} label="male" />  
//    <FormControlLabel value="other" control={<Radio />} label="other" />  
        
//     </RadioGroup>
// </FormControl>

//event you can deside size color and alignment also and helper text also

<FormControl error>
    {JSON.stringify(radio,null,4)}
    <FormLabel id="radio-button-group">Gender</FormLabel>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue={radio}
      name="radio-buttons-group"
      onChange={(e)=>{setRadio(e.target.value)}}
      row
    >
       <FormControlLabel value="female" control={<Radio  color='secondary' size='medium'/>} label="Female" /> 
       <FormControlLabel value="male" control={<Radio />} label="male" />  
        <FormControlLabel value="other" control={<Radio size='small'/>} label="other" />  
         <FormHelperText>plese select correct gender</FormHelperText> 
    </RadioGroup>
</FormControl>
  )
}

export default MuiRadio