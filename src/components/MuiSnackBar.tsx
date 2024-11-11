import { Alert, Box, Button, Divider, Snackbar, SnackbarCloseReason, Typography } from '@mui/material'
import React, { useState } from 'react'

function MuiSnackBar() {
    let [open, setOpen] = useState<boolean>(false)
    function clickHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {

        setOpen(true)
    }
    const closeHandler = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
      ) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    return (
        <Box>
            <Typography variant='body1' gutterBottom> This is For lerning snackBar</Typography>
            <Divider />
            <Button onClick={clickHandler} variant='contained'>click</Button>
            <Snackbar
                message="form submiteed successfully"
                open={open}
                autoHideDuration={6000}
                onClose={closeHandler}
                anchorOrigin={{
                    horizontal:'center',
                    vertical:"bottom"
                }}
            />


            {/* //custom snackbar */}
            <div>
      <Button onClick={clickHandler}>Open Snackbar</Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={closeHandler}>
        <Alert
          onClose={closeHandler}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
    </div>

        </Box>
    )
}

export default MuiSnackBar