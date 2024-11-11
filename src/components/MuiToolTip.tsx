import { CopyAll, Email, Face } from '@mui/icons-material'
import { Box, Paper, Stack, Tooltip } from '@mui/material'
import React from 'react'

function MuiToolTip() {
  return (
      <Box >
        <Paper sx={{width:"375px",minHeight:"375px"}}>
            <Stack direction={'row'} spacing={4} sx={{marginTop:"20px"}}>
               <Tooltip title="face" arrow placement='right-start'>
                 <Face/>
               </Tooltip>
               
               <Tooltip title="email" arrow placement='top-end'>
               <Email/>
               </Tooltip>

               <Tooltip title="copy" arrow placement='top-end' enterDelay={500} leaveDelay={300}>
               <CopyAll/>
               </Tooltip>
               
            </Stack>
        </Paper>
      </Box>
  )
}

export default MuiToolTip