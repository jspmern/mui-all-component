import { Rating, Stack } from '@mui/material'
import React, { useState } from 'react'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { FavoriteBorderOutlined, FavoriteOutlined } from '@mui/icons-material';

function MuiRating() {
    let [value, setValue] = useState<null | number>(null)
    function changeHandler(event: React.SyntheticEvent, newValue: number | null) {
        setValue(newValue)
    }
    return (
        <Stack spacing={2}>
        //basic rating
            {JSON.stringify({ value }, null, 4)}
            <Rating onChange={changeHandler} />

            {/* //rating in float number */}
            <Rating
                onChange={changeHandler}
                precision={0.5}
                defaultValue={2.5}
                size='large'
            />

            {/*custom icon*/}
            {/* <Rating 
         max={10}
         icon={<FavoriteOutlined color='error'/>}
         emptyIcon={<FavoriteBorderOutlined fontSize="inherit" />}
         /> */}


            {/* //select only single */}
            <Rating
                max={5}
                precision={0.5}
                highlightSelectedOnly />
        </Stack>
    )
}

export default MuiRating