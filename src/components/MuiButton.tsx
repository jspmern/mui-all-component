import { Button, IconButton, Stack } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

function MuiButton() {
    return (
        <div>
            MuiButton
            <hr />
            <hr />
            <br />
            {/* //in material ui we have three varient of button text,contained and outlined */}
            <Stack spacing={4}>
                <Stack direction={'row'} spacing={2}>
                    <Button variant="text" href='https://google.com'>Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined"  >Outlined</Button>
                </Stack>

                {/* //color in matrerial ui */}
                <Stack spacing={2} direction={'row'}>
                    //primary , secondary,error,warning,info,success
                    <Button color="secondary">Secondary</Button>
                    <Button variant="contained" color="success">
                        Success
                    </Button>
                    <Button variant="outlined" color="error">
                        Error
                    </Button>
                </Stack>

                {/* by default stack direction is flex that's the reason i am using display block */}
                <Stack display={'block'} spacing={2} direction={'row'}>
                    <Button variant='contained' size='small'>small</Button>
                    <Button variant='contained' size='medium' color='warning'>Medium</Button>
                    <Button variant='contained' size='large' color='error'>Large</Button>
                </Stack>

                {/* //icons button */}
                <Stack direction={'row'} spacing={2}>
                    <Button variant='contained' startIcon={<SendIcon />} > send</Button>
                    <Button variant='contained' endIcon={<DeleteIcon />} color='error'>Delete</Button>
                    <IconButton color="secondary" aria-label="add an alarm"  >
                        <AccessAlarmIcon />
                    </IconButton>

                </Stack>

                {/* by default stack direction is flex that's the reason i am using display block */}
                <Stack display={'block'} spacing={2} direction={'row'}>
                    <Button variant='contained' disabled>small</Button>

                    {/* //hover background shadow */}
                    <Button variant='contained' color='warning' disableElevation>Medium</Button>
                    {/* //hover effect stop */}
                    <Button variant='contained' color='error' disableRipple onClick={() => { alert('hello how are you') }}>Large</Button>
                </Stack>

            </Stack>

        </div >
    )
}

export default MuiButton