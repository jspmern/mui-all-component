import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

function MuiToggleButtonGroup() {
    let [formate, setFormate] = useState<string[]>([])
    let [single, setSingle] = useState<string | null>(null)
    function chagneHandler(event: React.MouseEvent<HTMLElement>, result: string[]) {
        setFormate(result)
    }
    function SinglechagneHandler(event: React.MouseEvent<HTMLElement>, result: string) {
        setSingle(result)
    }
    return (
        <>
            {JSON.stringify(formate, null, 4)}
            {JSON.stringify(single, null, 4)}

            {/* //multiple select */}
            <ToggleButtonGroup aria-label='multiple-select' value={formate} onChange={chagneHandler} >
                <ToggleButton value={'bold'} aria-label='bold'>
                    <FormatBoldIcon />
                </ToggleButton>
                <ToggleButton value={"italic"} aria-label='italic'>
                    <FormatItalicIcon />
                </ToggleButton>
                <ToggleButton value="underline" aria-label='underline'>
                    <FormatUnderlinedIcon />
                </ToggleButton>
            </ToggleButtonGroup>
            {/* //single select */}

            <ToggleButtonGroup aria-label='multiple-select' value={single} onChange={SinglechagneHandler} orientation="vertical" exclusive color='error'>
                <ToggleButton value={'bold'} aria-label='bold'>
                    <FormatBoldIcon />
                </ToggleButton>
                <ToggleButton value={"italic"} aria-label='italic'>
                    <FormatItalicIcon />
                </ToggleButton>
                <ToggleButton value="underline" aria-label='underline'>
                    <FormatUnderlinedIcon />
                </ToggleButton>
            </ToggleButtonGroup>
        </>
    )
}

export default MuiToggleButtonGroup