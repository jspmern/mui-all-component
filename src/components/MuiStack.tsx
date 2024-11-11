import { Avatar, Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

function MuiStack() {
  return (
     <>
      <Box sx={{border:"1 px solid black",
        width:"995px",
        padding:"12px",
        backgroundColor:"success.main",
        height:"100vh"
        }}  > 
        <Stack spacing={2}
          direction={{ xs: 'column', sm: 'row' }}
         divider={<Divider orientation='vertical' flexItem/>}
         sx={{
            flexWrap:"wrap",
            justifyContent:"center",
            alignItems:"center",
            height:"100vh",
            "& > *:hover":{
                  backgroundColor:"info.light",
                
            }
          
         }}
         >
            {/* //first box */}
        <Box sx={{border:'1px solid black'}}  >
           <Avatar>U</Avatar>
           <Typography>how are you</Typography>
        </Box>
         {/* //secound box */}
         <Box sx={{border:'1px solid black'}}>
           <Avatar>T</Avatar>
           <Typography>how are you</Typography>
        </Box>

        {/* //third box */}
        <Box sx={{border:'1px solid black'}}>
           <Avatar>S</Avatar>
           <Typography>how are you</Typography>
        </Box>
         {/* //third box */}
         <Box sx={{border:'1px solid black'}}>
           <Avatar>S</Avatar>
           <Typography>how are you</Typography>
        </Box>
         
        
     </Stack>
     </Box>
     </>
  )
}

export default MuiStack