import { Add, Facebook, Instagram, PlusOne } from '@mui/icons-material'
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import React from 'react'

function MuiSpeedDial() {
  return (
    <div>
        <Box right={16} bottom={16} position={'absolute'}>
            <SpeedDial ariaLabel='contact' icon={<SpeedDialIcon/>} direction='up'>
                <SpeedDialAction  icon={<PlusOne/>} tooltipTitle="pluse"/>
                <SpeedDialAction  icon={<Instagram/>} tooltipTitle="instagram"/>
                <SpeedDialAction  icon={<Facebook/>} tooltipTitle="facebook"/>

                    
                 
            </SpeedDial>
        </Box>
    </div>
  )
}

export default MuiSpeedDial