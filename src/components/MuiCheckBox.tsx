 
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Icon, Typography,   } from '@mui/material'
import React, { useState } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function MuiCheckBox() {
    let [check,setCheck]=useState(false)
    let [multiple,setMultiple]=useState<string[]>([])
    //change Handler
    function chanageHandler(event: React.ChangeEvent<HTMLInputElement>)
    {
        setCheck(event.target.checked)
    }
    //multiple change hadler
    function multipleChangeHandler(event: React.ChangeEvent<HTMLInputElement>)
    {
           let index=multiple.indexOf(event.target.value)
           if(index==-1)
           {
            setMultiple([...multiple,event.target.value])
           }
           else{
            setMultiple((pre)=>{
                return pre.filter((_,i)=>{
                    return i !=index
                })
            })
           }
    }
  return (
      <Box>
        <Typography variant='body2'>noraml checkbox</Typography>
         <Box>
            {JSON.stringify(check,null,4)}
            {JSON.stringify(multiple,null,4)}
            <FormControl>
            <FormControlLabel 
            label="Accept your terms and conditionxx" 
            control={
            <Checkbox 
            checked={check}
            onChange={chanageHandler}
            />
            }/>
            </FormControl>
         </Box>
          {/* //bookmark example */}
          <Box>
          <FormControl>
             <Checkbox checkedIcon={<BookmarkIcon/>} icon={<BookmarkBorderIcon/>} color='secondary' />
          </FormControl>
          </Box>

          {/* //multiple checkbox */}
          <br/>
          <FormControl>
            <FormLabel>select the course for checkout</FormLabel>
            <FormGroup >
                <FormControlLabel label="react" value={'react'} control={<Checkbox checked={multiple.includes('react')} onChange={multipleChangeHandler} />}  />
                <FormControlLabel label="angular" value={'angular'} control={<Checkbox checked={multiple.includes('angular')} onChange={multipleChangeHandler} />  }   />
                <FormControlLabel label="next"  value="next" control={<Checkbox checked={multiple.includes('next')} onChange={multipleChangeHandler}/>}  />

            </FormGroup>
            <FormHelperText>Select at least one</FormHelperText>
          </FormControl>
         </Box>

    
  )
}

export default MuiCheckBox