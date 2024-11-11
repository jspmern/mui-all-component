import { Box, Stack } from '@mui/material'
import React from 'react'
 import {LoadingButton} from '@mui/lab'
import { SwapVerticalCircleOutlined } from '@mui/icons-material'

function MuiLoadingButton() {
  return (
      <Box>
           <Stack direction="row" spacing={2}>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
        Fetch data
      </LoadingButton>
      <LoadingButton
        loading={false}
        loadingPosition="start"
        startIcon={<SwapVerticalCircleOutlined />}
        variant="outlined"
      >
        Save
      </LoadingButton>
    </Stack>
      </Box>
    // <Box>h</Box>
  )
}

export default MuiLoadingButton