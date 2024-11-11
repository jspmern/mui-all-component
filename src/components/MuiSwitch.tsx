import { Box, FormControl, FormControlLabel, FormGroup, FormLabel, Switch } from '@mui/material'
import React, { useState } from 'react'
function MuiSwitch() {
    let [checked,setChecked]=useState(false)
    function changeHandler(event: React.ChangeEvent<HTMLInputElement>)
    {
      setChecked(event.target.checked)
    }
  return (
    <Box>
        {/* //single switch */}
     <Box>
        {JSON.stringify(checked,null,4)}
          <FormControl>
            <FormControlLabel  label="dark mode" control={<Switch checked={checked} onChange={changeHandler}/>}/>
            </FormControl>
     </Box>

     {/* //multiple switch */}
     <Box>
        <FormControl>
            <FormLabel>this is for switch group</FormLabel>
            <FormGroup >
                <FormControlLabel label="html" control={<Switch color='secondary' size='medium'/>}/>
                <FormControlLabel label="css" control={<Switch   size='small'/>}/>
                <FormControlLabel label="js" control={<Switch/>}/>
            </FormGroup>
        </FormControl>
     </Box>
     </Box>
  )
}

export default MuiSwitch