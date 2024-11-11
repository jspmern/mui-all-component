import { CheckBoxOutlineBlank, CheckBoxOutlineBlankOutlined, EmailRounded, FaceRetouchingNatural } from '@mui/icons-material'
import { Alert, AlertTitle, Box, Button, Paper, Stack } from '@mui/material'
import React from 'react'

function MuiAlert() {
    return (
        <Box sx={{ width: '600px' }}>
            <Stack spacing={3} justifyContent={'center'}>
                <Alert>How are you</Alert>
                <Alert severity="success">This is a success Alert.</Alert>
                <Alert severity="info">This is an info Alert.</Alert>
                <Alert severity="warning">This is a warning Alert.</Alert>
                <Alert severity="error">This is an error Alert.</Alert>
            </Stack>

            <Stack spacing={3} justifyContent={'center'}>
                {/* //this is filled */}
                <Alert variant="filled" severity="success">
                    This is a filled success Alert.
                </Alert>
                <Alert variant="filled" severity="info">
                    This is a filled info Alert.
                </Alert>
                <Alert variant="filled" severity="warning">
                    This is a filled warning Alert.
                </Alert>
                <Alert variant="filled" severity="error">
                    This is a filled error Alert.
                </Alert>
                {/* //this is outlined */}

                <Alert variant="outlined" severity="success">
                    This is an outlined success Alert.
                </Alert>
                <Alert variant="outlined" severity="info">
                    This is an outlined info Alert.
                </Alert>
                <Alert variant="outlined" severity="warning">
                    This is an outlined warning Alert.
                </Alert>
                <Alert variant="outlined" severity="error">
                    This is an outlined error Alert.
                </Alert>
            </Stack>
            <Stack spacing={3}>
                {/* //color props */}
                <Alert severity='success' color='warning'>hii i am sucess but my color is warning</Alert>

                {/* //button and action */}
                <Alert severity="warning" onClose={() => { }}>
                    This Alert displays the default close icon.
                </Alert>
                <Alert
                    severity="success"
                    action={
                        <Button color="inherit" size="small">
                            UNDO
                        </Button>
                    }
                >
                    This Alert uses a Button component for its action.
                </Alert>
            </Stack>

            <Stack spacing={3} marginTop={3}>
                <Alert icon={<FaceRetouchingNatural fontSize="inherit" />} severity="success">
                    This success Alert has a custom icon.
                </Alert>
                <Alert icon={false} severity="success">
                    This success Alert has no icon.
                </Alert>
                <Alert
                    iconMapping={{
                        success: <EmailRounded fontSize="inherit" />,
                    }}
                >
                    This success Alert uses `iconMapping` to override the default icon.
                </Alert>
            </Stack>


            <Stack spacing={3} marginTop={3}>
                <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    This is a success Alert with an encouraging title.
                </Alert>
                <Alert severity="info">
                    <AlertTitle>Info</AlertTitle>
                    This is an info Alert with an informative title.
                </Alert>
                <Alert severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                    This is a warning Alert with a cautious title.
                </Alert>
                <Alert severity="error">
                    <AlertTitle
                    >Error</AlertTitle>
                    This is an error Alert with a scary title.
                </Alert>
            </Stack>
        </Box>
    )
}

export default MuiAlert