import { Box, Stack } from '@mui/material'
import React from 'react'

function MuiBox() {
    //box is div , but here you can use sx and but div you cannot use
  return (
    <Stack>
     <Box
      sx={{marginTop:'12px',
        backgroundColor:'primary.main',
        '&:hover':{
            backgroundColor:'secondary.main'
        }
      }} 
      height={'55px'}
       width={'55px'} >
        how are you
     </Box>

     {/* //it support system mui property */}
     <Box 
     height={'55px'}
     width={'55px'}
     bgcolor={'success.main'}
     color={'white'}
     component={'span'}
     
     >mui systme props</Box>
     </Stack>
  )
}

export default MuiBox