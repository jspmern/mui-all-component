import { InputAdornment, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
function MuiTextField() {
    let [value, setValue] = useState<string>('')
    let [visible, setVisible] = useState<boolean>(false)

    return (
        <Stack spacing={4}>
            {/* <Stack spacing={2} direction={'row'}> */}
            {/* text field have three varient , outlined (default),contained,text */}
            {/* <TextField/>
        <TextField  variant='standard'/> //standard
        <TextField variant='outlined'/> //outlined
        <TextField variant='filled'/>  //filled
        </Stack> */}

            {/* //if you want to set the label , you have to use label attribute */}
            <Stack spacing={2} direction={'row'}>
                <TextField label="username" />
                <TextField label="password" variant='filled' />
                <TextField label="address" variant='standard' />
                <TextField label="email" variant='outlined' />
            </Stack>

            {/* //size and color attribute */}
            <Stack spacing={2} direction={'row'} >
                <TextField label="username" size='medium' color='success' />
                <TextField label="password" variant='filled' size='small' color='warning' />
                <TextField label="address" variant='standard' size='medium' color='secondary' />
                <TextField label="email" variant='outlined' size='small' color='error' />
            </Stack>

            {/* //required (it add astrik to label) and helper text label information */}
            <Stack direction={'row'} spacing={2}>
                <TextField helperText="do'nt share your password with anyone" label="Enter your password" />
                <TextField helperText="Email must have to contain sub domain" label="Enter your Email" required />
            </Stack>

            {/* //type , disabled and readOnly  */}

            <Stack direction={'row'} spacing={2}>
                <TextField
                    type='password'
                    variant='outlined'
                    color='success'
                    helperText="this example for type/password"
                    size='small'
                    label="Password"
                    required
                />
                <TextField type='search' variant='outlined' color='error' helperText="this example for type/search" size='small' label="Password" required />

                <TextField type='search' variant='outlined' color='secondary' helperText="this example for make field disabled" size='medium' label="Address" disabled />

                <TextField type='text'
                    variant='standard'
                    color='secondary'
                    helperText="this example for make read only"
                    size='medium'
                    label="Address-2"
                    InputProps={{ readOnly: true }}
                    defaultValue={'BGAP7654'}
                />
            </Stack>

            {/* //For prefix and suffix symbol */}
            <Stack direction={'row'} spacing={2}>
                <TextField color='success'
                    required
                    label="Ammount"
                    helperText="Enter Ammount"
                    InputProps={{
                        startAdornment: <InputAdornment position='start'>$</InputAdornment>
                    }} />

                <TextField color='success'
                    required
                    label="Weight"
                    helperText="Enter Weight"
                    InputProps={{
                        endAdornment: <InputAdornment position='end'>K.G</InputAdornment>
                    }} />

            </Stack>

            {/* //error props */}

            <Stack direction={'row'} spacing={2}>
                <TextField required
                    label="Enter your name"
                    error={!value}
                    value={value}
                    onChange={(e) => { setValue(e.target.value) }}
                    helperText={!value ? "required" : 'dont forget to add surname'}
                />

            </Stack>

            {/* //Assignment Password box */}
            <Stack direction={'row'} spacing={2}>


                <TextField label="Password" required type={!visible ? 'password' : 'text'} InputProps={{
                    endAdornment: <InputAdornment
                        position='end'
                        onMouseEnter={() => setVisible(true)}
                        onMouseLeave={() => setVisible(false)}

                    > {!visible ? <VisibilityIcon /> : <VisibilityOffIcon />}</InputAdornment>
                }} />

            </Stack>




        </Stack>
    )
}

export default MuiTextField