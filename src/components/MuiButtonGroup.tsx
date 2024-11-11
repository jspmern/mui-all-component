import { Button, ButtonGroup, Stack } from '@mui/material'
import React from 'react'

function MuiButtonGroup() {
    return (
        <Stack direction="row">
            <ButtonGroup variant='outlined'>
                <Button >Left</Button>
                <Button >Center</Button>
                <Button >right</Button>
            </ButtonGroup>

            <ButtonGroup variant='outlined' orientation="vertical" aria-label="alignment button group">
                <Button >Left</Button>
                <Button >Center</Button>
                <Button >right</Button>
            </ButtonGroup>

        </Stack>
    )
}

export default MuiButtonGroup