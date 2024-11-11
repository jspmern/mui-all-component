import { Box, Skeleton, Stack } from '@mui/material'
import React from 'react'

function MuiSkeleton() {
    return (
        <>
            <Box sx={{ width: "500px" }}>
                <Skeleton variant='text' sx={{ mb: 3 }} />
                <Skeleton variant='rounded' sx={{ mb: 3, height: "125px", width: "125px" }} />
                <Skeleton variant='circular' sx={{ mb: 3, height: "125px", width: "125px" }} />
                <Skeleton variant='rectangular' sx={{ mb: 3, height: "125px", width: "125px" }} />
            </Box>

            <Box>
                <Skeleton variant='text' sx={{ width: "400px", mb: 2 }}  animation='wave' />
                <Stack direction={'row'} spacing={2} alignItems={'center'} >
                    <Box>
                        <Skeleton variant='text' sx={{ width: "200px", mb: 2 }}  animation='wave' />
                        <Skeleton variant='text' sx={{ width: "200px", mb: 2 }}  animation='wave' />
                        <Skeleton variant='text' sx={{ width: "200px", mb: 2 }}  animation='wave' />
                    </Box>
                    <Box>
                        <Skeleton variant='circular' sx={{ mb: 3, height: "125px", width: "125px" }}  animation='wave' />
                    </Box>
                </Stack>
                <Skeleton variant='rectangular' sx={{ mb: 3, height: "125px", width: "300px" }}   animation='wave' />
            </Box>
        </>
    )
}

export default MuiSkeleton