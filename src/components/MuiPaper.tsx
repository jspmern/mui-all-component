import { Box, Paper, Stack } from '@mui/material'
import React from 'react'

function MuiPaper() {
    return (
        <div style={{ backgroundColor: "#F4F6FF", height: "100vh", width: '100%' }}>
            <Stack direction={'row'} flexWrap={'wrap'}>
                <Box sx={{ height: "350px", width: "350px", p: 2 }} >
                    <Paper sx={{ height: "inherit", width: "inherit" }} elevation={0}>
                         1 and elevation -0
                    </Paper>
                </Box>
                <Box sx={{ height: "350px", width: "350px", p: 2 }} >
                    <Paper sx={{ height: "inherit", width: "inherit" }} elevation={1}>
                         2 elevation 1
                    </Paper>
                </Box>
                <Box sx={{ height: "350px", width: "350px", p: 2 }} >
                    <Paper sx={{ height: "inherit", width: "inherit" }} elevation={3}>
                         3 and elevation 3
                    </Paper>
                </Box>
                <Box sx={{ height: "350px", width: "350px", p: 2 }} >
                    <Paper sx={{ height: "inherit", width: "inherit" }} elevation={12}>
                         4 and elevation 12
                    </Paper>
                </Box>

                <Box sx={{ height: "350px", width: "350px", p: 2 }} >
                    <Paper sx={{ height: "inherit", width: "inherit" }} elevation={12} square={false}>
                         4 and elevation 12 and square false
                    </Paper>
                </Box>

                <Box sx={{ height: "350px", width: "350px", p: 2 }} >
                    <Paper sx={{ height: "inherit", width: "inherit" }} elevation={12} square={true}>
                         4 and elevation 12 and square true
                    </Paper>
                </Box>
            </Stack>




        </div>
    )
}

export default MuiPaper