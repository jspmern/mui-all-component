import { Box, Grid, Typography } from "@mui/material"

function MuiGrid() {
    return (
        <>
            {/* <div>
                <Grid container spacing={0} rowSpacing={5} height={'100vh'} sx={{justifyContent:"center",alignItems:"center"}}    >
                    <Grid item md={3}  xs={12}  >
                        <Box sx={{ border: '1px solid black' }}>Box-1</Box>
                    </Grid>
                    <Grid item md={5} xs={12}  >
                        <Box sx={{ border: '1px solid black' }}>Box-2</Box>
                    </Grid>
                    <Grid item md={1} xs={12} bgcolor={'green'} >
                        <Box sx={{ border: '1px solid black' }}>Box-3</Box>
                    </Grid>
                    <Grid item md={6} xs={12}  >
                        <Box sx={{ border: '1px solid black' }}>Box-4</Box>
                    </Grid>
                    <Grid item md={4} xs={12}  >
                        <Box sx={{ border: '1px solid black' }}>Box-5</Box>
                    </Grid>
                    <Grid item md={8} xs={12}  >
                        <Box sx={{ border: '1px solid black' }}>Box-6</Box>
                    </Grid>
                </Grid>
            </div> */}

            {/* //example for grid  */}

            <Grid container sx={{justifyContent:"center"}}>
                <Grid item  >
                    <img src="https://images.unsplash.com/photo-1728155253434-262ab74ef031?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={"150px"} width={"150px"} />
                </Grid>
                <Grid item md={6}>
                    <Grid container>
                        <Grid item md={8}>
                            <Typography variant="h2" gutterBottom>Standard license</Typography>
                            <Typography variant='body2' gutterBottom>Full resolution 1920x1080 . JPEG</Typography>
                            <Typography variant='body2' gutterBottom color="grey.ligth">ID: 1030114</Typography>
                            <Typography variant='button'>Remove</Typography>
                        </Grid>
                        <Grid item md={3}>
                            <Typography variant="h4">$19.00</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )

}
export default MuiGrid