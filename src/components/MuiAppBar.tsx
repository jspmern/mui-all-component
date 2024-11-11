import { MenuOutlined } from '@mui/icons-material'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'

function MuiAppBar() {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        edge='start'
                    >
                        <MenuOutlined />
                    </IconButton>
                    <Typography variant='h6' sx={{flexGrow:1}}   component={'div'}>Utsav</Typography>
                    <Stack direction={'row'} spacing={2}>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Service</Button>
                    <Button color="inherit">Contact</Button>
                    </Stack>
                    

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default MuiAppBar