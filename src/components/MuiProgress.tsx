import { Box, CircularProgress, LinearProgress, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

function MuiProgress() {
    let [value, setValue] = useState<number>(0)
    useEffect(() => {
        let id = setInterval(() => {
            if (value == 100) {
                setValue(0)
            }
            else {
                setValue((pre) => {
                    const diff = Math.random() * 10;
                    return Math.min(pre + diff, 100);
                })
            }
        }, 800)
        return () => {
            clearTimeout(id)
        }
    })
    return (
        <Box >
            <Stack sx={{ m: 3, width: "100%", height: "400px" }} direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={3}>
                <CircularProgress />
                <CircularProgress color='error' />
                <CircularProgress color='primary' size={'3rem'} />
                <CircularProgress variant='determinate' color='warning' value={25} />
                <CircularProgress variant='determinate' color='info' value={55} />
                <CircularProgress variant='determinate' color='error' value={75} />
            </Stack>




            {/* <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}> */}
            {/* <LinearProgress color="secondary" />
                <LinearProgress color="success" />
                <LinearProgress color="inherit" />
            </Stack> */}

            <Box sx={{ width: "600px", mt: 5 }}  >
                <Box>
                <LinearProgress value={value} variant='determinate' />
                </Box>
                
                <Box sx={{ minWidth: 35 }}  >
                    <Typography
                        variant="body2"
                       
                        sx={{ color: 'text.secondary' }}
                    >{`${Math.round(value)}%`}</Typography>
                </Box>
            </Box>

        </Box>
    )
}

export default MuiProgress