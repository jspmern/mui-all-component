import { Add, AddIcCallTwoTone, PersonPinCircleRounded } from '@mui/icons-material'
import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'

function MuiDialog() {
    // let [email, setEmail] = useState([{ id: 1, email: 'utsavmaithili@gmail.com' }, { id: 2, email: "utsavjha2020@gmail.com" }])
    // let [selected, setSelected] = useState("utsavmaithili@gmail.com")
    // let [open, setOpen] = useState(false)
    // function clickHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)
    // {
    //     setOpen(true)
    // }
    // function closeHandler(event: {}, reason: "backdropClick" | "escapeKeyDown")
    // {
    //     setOpen(false)
    // }
    // function dataHandler(data:string)
    // {
    //   setSelected(data)
    //   setOpen(false)
    // }
    let [open, setOpen] = useState<boolean>(false)
    function closeHandler()
        {
            setOpen(false)
        }
        function clickHandler()
        {
            setOpen(true)
        }
return (
    <Box sx={{ p: 2, width: "100%", display: 'grid', placeItems: "center" }}>
        {/* <Typography variant='subtitle1' gutterBottom>Selected: {selected}</Typography>
            <Button variant='outlined' onClick={clickHandler}>OPEN SIMPLE DIALOG</Button>
            <Dialog open={open} onClose={closeHandler}>
                <DialogTitle>Set backup account</DialogTitle>
                <List>
                    {email.map((item) => {
                        return <ListItem key={item.id} disableGutters>
                            <ListItemButton onClick={()=>{
                                dataHandler(item.email)
                            }}>
                                <ListItemAvatar>
                                    <Avatar sx={{bgcolor:'blue',color:'blue'}}>
                                        <PersonPinCircleRounded />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={item.email} />
                            </ListItemButton>
                        </ListItem>
                    })}
                    <ListItem disableGutters>
                        <ListItemButton  onClick={()=>{
                                dataHandler('addAccount')
                            }}>
                            <ListItemAvatar>
                                <Avatar>
                                    <Add />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="add Account" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Dialog> */}
        {/* //this is dialog 2  */}

        <Button variant='outlined' onClick={clickHandler}>OPEN ALERT DIALOG</Button>
        <Dialog open={open} onClose={closeHandler}>
          <DialogTitle>Use Google location service ?</DialogTitle>
          <DialogContent>
            <DialogContentText> 
                Let Goggle help apps detgermine location.this means sending anonymous location data to google, even when no are running
            </DialogContentText>
            <DialogActions>
              <Button onClick={closeHandler}>Disagree</Button> 
              <Button onClick={closeHandler} autoFocus>Agree</Button> 
            </DialogActions>
          </DialogContent>
        </Dialog>
    </Box>
)
}

export default MuiDialog