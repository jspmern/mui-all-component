import { EmailOutlined, Microsoft, NotificationAddRounded } from '@mui/icons-material'
import { Avatar, Badge, Stack } from '@mui/material'
import React from 'react'

function MuiBadge() {
  return (
    <>
     <Stack direction={'row'} spacing={3} alignItems={'center'} justifyContent={'center'}>
       <Badge badgeContent={4} color='success'>
          <EmailOutlined color='action'/>
       </Badge>
     </Stack>
     <br/>
     <Stack direction={'row'} spacing={3} alignItems={'center'} justifyContent={'center'}>
        {/* //by default it is 99 only */}
       <Badge badgeContent={1000} color='success' max={2000}>
          <EmailOutlined color='action'/>
       </Badge>

       <Badge badgeContent={2} color='info' max={2000}>
              <Microsoft/>
       </Badge>
     </Stack>

     {/* //diffrent variant */}

     <Stack direction={'row'} spacing={3} alignItems={'center'} justifyContent={'center'}>
       <Badge badgeContent={4} color='success' variant='dot'>
          <EmailOutlined color='primary'  />
       </Badge>
     </Stack>

     {/* //show zero */}
     <Stack direction={'row'} spacing={3} alignItems={'center'} justifyContent={'center'}>
       <Badge badgeContent={0} color='success' showZero >
          <EmailOutlined color='primary'  />
       </Badge>
     </Stack>
   

   <br/>
   <br/>

     <Stack direction={'row'} spacing={3} alignItems={'center'} justifyContent={'center'}>
       <Badge  color='success' variant='dot'>
       <Avatar src="https://media.licdn.com/dms/image/v2/D5603AQEwvjm5kRAeGg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714505856986?e=2147483647&v=beta&t=IU8pV-a4eAvjtltY6AprKTK7DxzE4lR954qGe5DsOAs"
                      alt='hello' />
       </Badge>
     </Stack>

     </>
  )
}

export default MuiBadge