import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, TextField } from '@mui/material'
import React from 'react'

function MuiFormControl() {
  return (
    //by using form control you can create form for example text field password field
    <FormControl error variant='standard'>
      <FormLabel  >Form submit</FormLabel>
      <FormControlLabel control={<TextField color='info' variant='filled' label="hello" />} label="uernamexxx" />
      <FormControlLabel control={<TextField color='secondary' variant='standard' type="password" size='small' sx={{ marginTop: "30px" }} />} label="Password" />
      <FormHelperText>All Field is required *</FormHelperText>



    </FormControl>
  )
}

export default MuiFormControl

