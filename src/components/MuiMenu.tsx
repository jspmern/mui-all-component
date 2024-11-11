import { BreakfastDining, KeyboardArrowDown } from '@mui/icons-material'
import { AppBar, Button, IconButton, Menu, MenuItem, Stack, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

function MuiMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit">
                        <BreakfastDining />
                    </IconButton>
                    <Typography component={'div'} variant='h6' sx={{ flexGrow: 1 }}>Logo</Typography>
                    <Stack direction={'row'} spacing={2}>
                        <Button color='inherit'
                            onClick={handleClick}
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            endIcon={<KeyboardArrowDown />}
                        >Contact</Button>
                        <Button color='inherit' >About</Button>
                        <Button color='inherit'>Service</Button>
                    </Stack>
                </Toolbar>
                <Menu
                    open={open}
                    onClose={handleClose}
                    id="basic-menu"
                    anchorEl={anchorEl}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}

                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </AppBar>

        </div>
    )
}

export default MuiMenu