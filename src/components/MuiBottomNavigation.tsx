import { FavoriteOutlined, LocationOnOutlined, RestoreOutlined } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import React, { useState } from 'react'

function MuiBottomNavigation() {
    let [navigate,setNavigate]=useState(0)
    return (
        <Box >
            <BottomNavigation sx={{bottom:0, position:"relative",width:"100%" }} value={navigate} onChange={(event,newvalue)=>setNavigate(newvalue)}>
                <BottomNavigationAction label="Recents" icon={<RestoreOutlined />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteOutlined />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnOutlined />} />
            </BottomNavigation>
        </Box>
    )
}

export default MuiBottomNavigation