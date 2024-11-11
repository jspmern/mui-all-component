import { ExpandMoreOutlined } from '@mui/icons-material';
import { Masonry } from '@mui/lab';
import { Accordion, AccordionDetails, AccordionSummary, Box, Paper } from '@mui/material'
import React from 'react'

function MuiMisonary() {

    const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];
    return (
        <Box sx={{ width: 500, minHeight: 393, marginTop: "18px" }}>
            {/* //Normal Masonry */}
            {/* <Masonry columns={4} spacing={2}>
            {heights.map((height,index)=>{
                return <Paper sx={{display:"flex", alignItems:"center", justifyContent:"center" , height,border:"1px solid"}}>
                    {index+1}
                </Paper>
            })}
             </Masonry> */}

            {/* //masonry with accordian */}
            <Masonry columns={4} spacing={2}>
                {heights.map((height, index) => {
                    return <Paper sx={{ border: "1px solid" }}>
                        <Accordion sx={{minHeight:height}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreOutlined />}>
                                {index + 1}
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit.
                            </AccordionDetails>
                        </Accordion>
                    </Paper>
                })}
            </Masonry>
        </Box>
    )
}

export default MuiMisonary