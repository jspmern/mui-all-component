import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

function MuiTabel() {
    let userDetails = [{
        "id": 1,
        "first_name": "Tonie",
        "last_name": "Chubb",
        "email": "tchubb0@slashdot.org",
        "gender": "Female"
    },

    { "id": 2, "first_name": "Padriac", "last_name": "Bather", "email": "pbather1@oaic.gov.au", "gender": "Male" },
    { "id": 3, "first_name": "Garry", "last_name": "Haig", "email": "ghaig2@barnesandnoble.com", "gender": "Non-binary" },
    { "id": 4, "first_name": "Simone", "last_name": "Dennick", "email": "sdennick3@europa.eu", "gender": "Female" },
    { "id": 5, "first_name": "Osbourne", "last_name": "Titmuss", "email": "otitmuss4@myspace.com", "gender": "Male" },
    { "id": 6, "first_name": "Jacobo", "last_name": "Sket", "email": "jsket5@ucoz.com", "gender": "Genderqueer" },
    { "id": 7, "first_name": "Rossie", "last_name": "McNaughton", "email": "rmcnaughton6@list-manage.com", "gender": "Male" },
    { "id": 8, "first_name": "Ignacio", "last_name": "O' Quirk", "email": "ioquirk7@geocities.com", "gender": "Male" },
    { "id": 9, "first_name": "Ethelind", "last_name": "Mignot", "email": "emignot8@army.mil", "gender": "Female" },
    { "id": 10, "first_name": "Mirabella", "last_name": "Shoosmith", "email": "mshoosmith9@hostgator.com", "gender": "Female" }]
    return (
        <>
            {/* //this is normal table with alignment */}
            {/* <TableContainer component={Paper} sx={{marginBottom:"30px"}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell> First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell align='center'>Email</TableCell>
                            <TableCell align='right'>Gender</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userDetails.map((item) => {
                            return <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.first_name}</TableCell>
                                <TableCell>{item.last_name}</TableCell>
                                <TableCell align='center'>{item.email}</TableCell>
                                <TableCell align='right'>{item.gender}</TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer> */}

            {/* //this is table their we can set maxHeigth and width */}
            <TableContainer component={Paper} sx={{marginBottom:"30px",maxHeight:340,maxWidth:550}} >
                <Table  stickyHeader >
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell> First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell align='center'>Email</TableCell>
                            <TableCell align='right'>Gender</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userDetails.map((item) => {
                            return <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.first_name}</TableCell>
                                <TableCell>{item.last_name}</TableCell>
                                <TableCell align='center'>{item.email}</TableCell>
                                <TableCell align='right'>{item.gender}</TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default MuiTabel