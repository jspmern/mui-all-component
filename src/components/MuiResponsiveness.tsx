import { Box } from '@mui/material'
import React from 'react'

function MuiResponsiveness() {
  return (
    <Box  sx={{
        height:"300px",
        bgcolor:"red",
        width:{
            xs:200,
            sm:250,
            md:300,
            xl:400,
            xxl:500
        }
    }}>

    </Box>
  )
}

export default MuiResponsiveness