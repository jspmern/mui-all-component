import { Box, Divider, Link } from '@mui/material'
import React from 'react'

function MuiLink() {
  return (
    <Box sx={{p:4}}>
        <Link href="#" >click here</Link>
        <Divider/>
        <Link href="#" color='secondary' >click here</Link>
        <Divider/>
        <Link href="#"  underline='hover'>click here</Link>
        <Divider/>
        <Link href="#"  variant='h1' color='success.main'>click here</Link>

    </Box>
  )
}

export default MuiLink