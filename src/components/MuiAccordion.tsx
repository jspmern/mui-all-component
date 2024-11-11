import { ExpandMoreRounded, ExtensionRounded } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

function MuiAccordion() {
    let [expend, setExpend] = useState<string | boolean>(false)
    let changeHandler = (panel: string) => {
        return (event: React.SyntheticEvent, expanded: boolean) => {
            setExpend(expanded ? panel : false)
        }
    }
    return (
        //     <Stack>
        //         <Accordion defaultExpanded>
        //             <AccordionSummary expandIcon={<ExpandMoreRounded />}>Hello1</AccordionSummary>
        //             <AccordionDetails>
        //                 <Typography variant='body2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam distinctio corporis placeat officia sint magni.</Typography>
        //             </AccordionDetails>
        //         </Accordion>
        //         <Accordion>
        //             <AccordionSummary expandIcon={<ExpandMoreRounded  />}>Hello2</AccordionSummary>
        //             <AccordionDetails>
        //                 <Typography variant='body2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam distinctio corporis placeat officia sint magni.</Typography>
        //             </AccordionDetails>
        //         </Accordion>
        //         <Accordion>
        //             <AccordionSummary expandIcon={<ExpandMoreRounded  />}>Hello3</AccordionSummary>
        //             <AccordionDetails>
        //                 <Typography variant='body2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam distinctio corporis placeat officia sint magni.</Typography>
        //             </AccordionDetails>
        //         </Accordion>
        //         <Accordion>
        //             <AccordionSummary expandIcon={<ExpandMoreRounded  />}>Hello4</AccordionSummary>
        //             <AccordionDetails>
        //                 <Typography variant='body2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam distinctio corporis placeat officia sint magni.</Typography>
        //             </AccordionDetails>
        //         </Accordion>

        //     </Stack>
        // )

        <Stack>
            <Accordion defaultExpanded onChange={changeHandler('panel1')} expanded={expend == "panel1"}>
                <AccordionSummary expandIcon={<ExpandMoreRounded />}>Hello1</AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam distinctio corporis placeat officia sint magni.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion onChange={changeHandler('panel2')} expanded={expend == "panel2"}>
                <AccordionSummary expandIcon={<ExpandMoreRounded />}>Hello2</AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam distinctio corporis placeat officia sint magni.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion onChange={changeHandler('panel3')} expanded={expend == "panel3"}>
                <AccordionSummary expandIcon={<ExpandMoreRounded />}>Hello3</AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam distinctio corporis placeat officia sint magni.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion onChange={changeHandler('panel4')} expanded={expend == "panel4"}>
                <AccordionSummary expandIcon={<ExpandMoreRounded />}>Hello4</AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam distinctio corporis placeat officia sint magni.</Typography>
                </AccordionDetails>
            </Accordion>

        </Stack>
    )
}

export default MuiAccordion