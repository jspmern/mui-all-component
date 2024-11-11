import { CardTravel, CssRounded, Email, HtmlRounded, ImageAspectRatio, InboxOutlined, JavascriptTwoTone, MailOutline, RecentActorsRounded } from '@mui/icons-material'
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'
import React from 'react'

function MuiList() {
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} >
            <Stack spacing={2} direction={'row'}>
                {/* //this is normal */}
                {/* <List>
                    <ListItem>
                        <ListItemText primary="item-1" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="item-2" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="item-3" />
                    </ListItem>

                </List> */}
                {/* //this is list with icon */}
                {/* <List>
                    <ListItem >
                        <ListItemIcon>
                            <InboxOutlined />
                        </ListItemIcon>
                        <ListItemText primary="list -1 " secondary="how are you" />
                    </ListItem>
                    <ListItem >
                        <ListItemIcon>
                            <InboxOutlined />
                        </ListItemIcon>
                        <ListItemText primary="list -1 " secondary="how are you" />
                    </ListItem>
                    <ListItem >
                        <ListItemIcon>
                            <InboxOutlined />
                        </ListItemIcon>
                        <ListItemText primary="list -1 " secondary="how are you" />
                    </ListItem>
                    <ListItem >
                        <ListItemIcon>
                            <InboxOutlined />
                        </ListItemIcon>
                        <ListItemText primary="list -1 " secondary="how are you" />
                    </ListItem>
                </List> */}
            </Stack>

            {/* //item with icon and  clikable button */}
            {/* <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <HtmlRounded />
                        </ListItemIcon>
                        <ListItemText primary="html" secondary="Html is first basic for start web development" />
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <CssRounded />
                        </ListItemIcon>
                        <ListItemText primary="css" secondary="css is the useful for do designing in website" />
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <JavascriptTwoTone />
                        </ListItemIcon>
                        <ListItemText primary="Javascript" secondary="By using js we can make our website dynamic" />
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            < RecentActorsRounded/>
                        </ListItemIcon>
                        <ListItemText primary="React" secondary="It is enchanced version of javascript , it make our website fast" />
                    </ListItemButton>
                </ListItem>
                <Divider/>
            </List> */}

            {/* //item with icon and clickable button with avtaar */}
            <Box sx={{width:"400px",bgcolor:'#efefef'}}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemAvatar>
                        <Email/>
                    </ListItemAvatar>
                    <ListItemText primary="email"/>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Email/>
                    </ListItemAvatar>
                    <ListItemText primary="email"/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <MailOutline/>
                    </ListItemAvatar>
                    <ListItemText primary="email"/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <ImageAspectRatio />
                    </ListItemAvatar>
                    <ListItemText primary="email"/>
                </ListItem>
            </List>
            </Box>


        </Box>
    )
}

export default MuiList