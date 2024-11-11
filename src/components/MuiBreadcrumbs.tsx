import { AbcOutlined, HomeRepairServiceOutlined } from '@mui/icons-material'
import { Box, Breadcrumbs, Divider, Link, Typography } from '@mui/material'
import React from 'react'

function MuiBreadcrumbs() {
  return (
    <Box sx={{p:4,m:4}}>
      <Breadcrumbs aria-label="breadcrumb"  >
        <Link href="#" underline='hover'>Home</Link>
        <Link href="#" underline='hover'>About</Link>
        <Link href="#" underline='hover'>Service</Link>
         <Typography>shoes</Typography>
      </Breadcrumbs>
      <Divider/>
      <Breadcrumbs aria-label="breadcrumb"  >
        <Link href="#" underline='hover'>  <HomeRepairServiceOutlined sx={{ mr: 0.5 }} fontSize="inherit" /> Home</Link>
        <Link href="#" underline='hover'> <AbcOutlined/>  About</Link>
        <Link href="#" underline='hover'>Service</Link>
         <Typography>shoes</Typography>
      </Breadcrumbs>
      <Divider/>
      <Breadcrumbs aria-label="breadcrumb" maxItems={2} itemsBeforeCollapse={2} >
        <Link href="#" underline='hover'>Home</Link>
        <Link href="#" underline='hover'>About</Link>
        <Link href="#" underline='hover'>Service</Link>
        <Link href="#" underline='hover'>Home</Link>
        <Link href="#" underline='hover'>About</Link>
        <Link href="#" underline='hover'>Service</Link>
        <Link href="#" underline='hover'>Home</Link>
        <Link href="#" underline='hover'>About</Link>
        <Link href="#" underline='hover'>Service</Link>
         <Typography>shoes</Typography>
      </Breadcrumbs>
      <Divider/>
      <Breadcrumbs aria-label="breadcrumb" maxItems={2}  itemsAfterCollapse={2} >
        <Link href="#" underline='hover'>Home</Link>
        <Link href="#" underline='hover'>About</Link>
        <Link href="#" underline='hover'>Service</Link>
        <Link href="#" underline='hover'>Home</Link>
        <Link href="#" underline='hover'>About</Link>
        <Link href="#" underline='hover'>Service</Link>
        <Link href="#" underline='hover'>Home</Link>
        <Link href="#" underline='hover'>About</Link>
        <Link href="#" underline='hover'>Service</Link>
         <Typography>shoes</Typography>
      </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadcrumbs