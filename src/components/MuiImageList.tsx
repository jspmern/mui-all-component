import { InfoOutlined } from '@mui/icons-material';
import { Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import React from 'react'
const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];
  const itemData2 = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      cols: 2,
    },
  ];
function MuiImageList() {
  return (
       <Grid container>
           <Grid item xs={12}>
            <Typography variant='subtitle1' gutterBottom>I am first imagelist</Typography>
                 <ImageList cols={3} rowHeight={164}  sx={{ width: 500, height: 450 }} >
                    {itemData.map((item)=>{
                        return <ImageListItem key={item.img+item.title}>
                              <img src={item.img} alt={item.img} loading='lazy'/>
                        </ImageListItem>
                    })}
                 </ImageList>
           </Grid>

           <hr/>
           <Grid item xs={12}>
            <Typography variant='subtitle1' gutterBottom>I am secound imagelist</Typography>
                 <ImageList cols={3} rowHeight={121}  sx={{ width: 500, height: 450 }}  variant='quilted'>
                    {itemData2.map((item)=>{
                        return <ImageListItem key={item.img+item.title}>
                              <img src={item.img} alt={item.img} loading='lazy'/>
                        </ImageListItem>
                    })}
                 </ImageList>
           </Grid>
              
           <Grid item xs={12}>
            <Typography variant='subtitle1' gutterBottom>I am third imagelist</Typography>
                 <ImageList cols={3}  gap={8} sx={{ width: 500, height: 450 }}  variant='woven'>
                    {itemData2.map((item)=>{
                        return <ImageListItem key={item.img+item.title}>
                              <img src={item.img} alt={item.img} loading='lazy'/>
                        </ImageListItem>
                    })}
                 </ImageList>
           </Grid>

           <Grid item xs={12}>
            <Typography variant='subtitle1' gutterBottom>I am fourth imagelist</Typography>
                 <ImageList cols={3}  gap={8} sx={{ width: 500, height: 450 }} >
                    <ImageListItem>Gallary</ImageListItem>
                    {itemData2.map((item)=>{
                        return <><ImageListItem key={item.img+item.title}>
                              <img src={item.img} alt={item.img} loading='lazy'/>
                              <ImageListItemBar
                               title="utsav"
                               subtitle="i am fine"
                               actionIcon={
                                <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${item.title}`}
                              >
                                <InfoOutlined />
                              </IconButton>
                               }></ImageListItemBar>
                        </ImageListItem>  
                        
                        </>
                           
                    })}
                 </ImageList>
           </Grid>

           
       </Grid>
  )
}

export default MuiImageList