import { FavoriteOutlined, MoreVertOutlined, ShareOutlined } from '@mui/icons-material'
import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Grid, Icon, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'

function MuiCard() {
    return (
        <div style={{ height: "100vh", width: "100%", backgroundColor: "#F4F6FF", padding: "12px" }}>
            <Grid container justifyContent={'space-around'}>
                <Grid item xs={6}>
                    <Stack direction={'row'} spacing={2}>

                        {/* //1st */}
                    <Card sx={{ width: "225px", padding: "16px" }} variant='elevation'>
                        <CardContent>
                            <Typography variant='subtitle2' gutterBottom color='text.secondary'>World of the Day</Typography>
                            <Typography variant='h4' gutterBottom>Be . nev . o. lent</Typography>
                            <Typography variant='subtitle2' color='text.secondary' gutterBottom>adjective</Typography>
                            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing.</Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant='text'>Click</Button>
                        </CardActions>
                    </Card>

                    {/* //2nd */}
                    <Card sx={{ width: "235px", padding: "16px" }} variant='elevation'>
                <CardContent>
                    <Typography variant='subtitle2' gutterBottom color='text.secondary'>World of the Day</Typography>
                    <Typography variant='h4' gutterBottom>Be . nev . o. lent</Typography>
                    <Typography variant='subtitle2' color='text.secondary' gutterBottom>adjective</Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing.</Typography>
                </CardContent>
                <CardActions>
                    <Button variant='text'>Click</Button>
                </CardActions>
            </Card>
                    </Stack>
                   
                </Grid>
                <Grid item>
                    <Card sx={{width:"255px"}}>
                        <CardHeader title="Shrimp and Chorizo paella" subheader="September 14, 2016" action={ <IconButton>
                            <MoreVertOutlined/>
                        </IconButton>}  avatar={ <Avatar sx={{bgcolor:"red"}}>U</Avatar>}  ></CardHeader>
                        <CardMedia image='https://tse2.mm.bing.net/th/id/OIP.drSuqFnHx8ocN5lW6CzLIgHaEK?rs=1&pid=ImgDetMain' component={'img'} height={"194"}/>
                        <CardContent>
                            <Typography sx={{color:"text.secondary"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatem a saepe iure! Lorem ipsum dolor sit amet.</Typography>
                        </CardContent>
                         <CardActions disableSpacing >
                            <IconButton>
                                <FavoriteOutlined/>
                            </IconButton>
                            <IconButton>
                                <ShareOutlined/>
                            </IconButton>
                         </CardActions>
                    </Card>
                </Grid>

                <Grid item>
                    <Card sx={{width:"255px"}}>
                       <CardActionArea>
                        <CardHeader title="Shrimp and Chorizo paella" subheader="September 14, 2016" action={ <IconButton>
                            <MoreVertOutlined/>
                        </IconButton>}  avatar={ <Avatar sx={{bgcolor:"red"}}>U</Avatar>}  ></CardHeader>
                        <CardMedia image='https://tse2.mm.bing.net/th/id/OIP.drSuqFnHx8ocN5lW6CzLIgHaEK?rs=1&pid=ImgDetMain' component={'img'} height={"194"}/>
                        <CardContent>
                            <Typography sx={{color:"text.secondary"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatem a saepe iure! Lorem ipsum dolor sit amet.</Typography>
                        </CardContent>
                         <CardActions disableSpacing >
                            <IconButton>
                                <FavoriteOutlined/>
                            </IconButton>
                            <IconButton>
                                <ShareOutlined/>
                            </IconButton>
                         </CardActions>
                         </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default MuiCard