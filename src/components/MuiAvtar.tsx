import { Avatar, AvatarGroup, Box, Divider, Stack } from '@mui/material'
import React from 'react'

function MuiAvtar() {
    return (

        //this is basic avtaar
        <Box sx={{ p: 4, m: 4 }}>
            <Stack spacing={4} direction={'row'}>
                <Avatar sx={{ bgcolor: "red" }}>UJ</Avatar>
                <Avatar
                    sx={{ bgcolor: "secondary" }}
                    variant='rounded' >AJ</Avatar>
                <Avatar
                    sx={{ bgcolor: 'yellow', color: 'black' }}
                    variant='square'
                >VJ</Avatar>
            </Stack>
            <Divider />
            {/* //this is for image */}
            <Stack spacing={2} direction={'row'} sx={{ marginTop: 3 }}>

                <Avatar src="https://media.licdn.com/dms/image/v2/D5603AQEwvjm5kRAeGg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714505856986?e=2147483647&v=beta&t=IU8pV-a4eAvjtltY6AprKTK7DxzE4lR954qGe5DsOAs" />

                <Avatar src="https://media.licdn.com/dms/image/v2/D5603AQEwvjm5kRAeGg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714505856986?e=2147483647&v=beta&t=IU8pV-a4eAvjtltY6AprKTK7DxzE4lR954qGe5DsOAs" />

                <Avatar src="https://media.licdn.com/dms/image/v2/D5603AQEwvjm5kRAeGg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714505856986?e=2147483647&v=beta&t=IU8pV-a4eAvjtltY6AprKTK7DxzE4lR954qGe5DsOAs" />

                <Avatar src="https://media.licdn.com/dms/image/v2/D5603AQEwvjm5kRAeGg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714505856986?e=2147483647&v=beta&t=IU8pV-a4eAvjtltY6AprKTK7DxzE4lR954qGe5DsOAs"
                    sx={{ width: 56, height: 56 }} alt='hello' />
            </Stack>

            {/* //this is for the group */}

            <br />
            <br />
            <Stack spacing={4} direction={'row'}>
                <AvatarGroup max={4} >
                    <Avatar sx={{ bgcolor: "red" }}>UJ</Avatar>
                    <Avatar
                        sx={{ bgcolor: "secondary" }}
                    >AJ</Avatar>
                    <Avatar
                        sx={{ bgcolor: 'yellow', color: 'black' }}

                    >VJ</Avatar>
                    <Avatar sx={{ bgcolor: "red" }}>UJ</Avatar>
                    <Avatar
                        sx={{ bgcolor: "secondary" }}
                    >AJ</Avatar>
                    <Avatar
                        sx={{ bgcolor: 'yellow', color: 'black' }}

                    >VJ</Avatar>
                    <Avatar sx={{ bgcolor: "red" }}>UJ</Avatar>
                    <Avatar
                        sx={{ bgcolor: "secondary" }}
                    >AJ</Avatar>
                    <Avatar
                        sx={{ bgcolor: 'yellow', color: 'black' }}

                    >VJ</Avatar>
                </AvatarGroup>
            </Stack>
        </Box>
    )
}

export default MuiAvtar