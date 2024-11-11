import React from 'react'
import Typography from '@mui/material/Typography';
function MuiTypography() {
    return (
        <div>
            MuiTypography
            <hr />
            <hr />
            <Typography variant='h1'>H1 Heading</Typography>
            <Typography variant='h2'>H2 Heading</Typography>
            <Typography variant='h3'>H3 Heading</Typography>
            <Typography variant='h4'>H4 Heading</Typography>
            <Typography variant='h5'>H5 Heading</Typography>
            <Typography variant='h6'>H6 Heading</Typography>

            {/*             
            this is h6 */}
            <Typography variant='subtitle1'>sub title 1</Typography>
            <Typography variant='subtitle2'>sub title 2</Typography>

            {/* //this look like a paragraph */}
            <Typography variant='body1'>Body 1</Typography>
            <Typography variant='body2'>Body 2</Typography>


            {/* //if you want to change the text into another tag ,so here h4 is treated as a h1  but class is applicable of h4 only*/}
            <Typography variant='h4' component={'h1'}>H4 🔁 H1 Heading</Typography>

            {/* //gutterbottom give margin in bottom  and gutterbootom depends on varient, larger component have more space */}
            <Typography variant='body2' gutterBottom> Gutter Bottom with body2</Typography>
            <Typography variant='h2' gutterBottom> Gutter Bottom h2</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet.</Typography>

            <Typography variant='button'  >click here</Typography>




        </div>
    )
}

export default MuiTypography