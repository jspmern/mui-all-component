import { AppBar, Box, Drawer, IconButton, Toolbar } from '@mui/material'
import React, { useState } from 'react'
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
function MuiDrawer() {
    let [isOpen,setIsOpen]=useState(false)
    function drawerHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)
    {
        setIsOpen(!isOpen)
    }
  return (
    <div>
        <AppBar position='static'>
          <Toolbar >
            <IconButton color='inherit' onClick={drawerHandler}>
                <DensitySmallIcon  />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer open={isOpen}    onClose={drawerHandler} anchor='left'>
            <Box sx={{width:250}} role='presentation'><h1>hello</h1></Box> 
        </Drawer>
    </div>
  )
}

export default MuiDrawer