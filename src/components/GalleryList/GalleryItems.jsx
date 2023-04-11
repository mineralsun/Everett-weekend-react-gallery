import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


function GalleryItems({ image, fetchGalleryList }) {
    // TODO : MAKE AN ARROW FUNCTION TO LIKE PHOTOS (PUT REQUEST)

    const [likes, setLikes] = useState(image.likes);
    const [showDesc, setShowDesc] = useState(false)

    const mouseEnter = (e) => {
        e.target.style.background = "grey"
        setShowDesc(true)
        if (setShowDesc === true) {
            image.description
        }
    }

    const mouseLeave = (e) => {
        e.target.style.background = "white"
        setShowDesc(false)
    }

    const likePhoto = (e) => {
        axios.put(`/gallery/like/:${image.id}`)
        .then((response) => {
            console.log(`Liked this photo!`);
            setLikes(likes + 1);
            fetchGalleryList();
        })
        .catch((error) => {
            console.log(`Error in PUT ${error}`);
            alert('Something went wrong')
        });
    }


    return (
            <Grid
            border={1}
            margin={2}
            padding={1}
            borderColor={'black'} 
            item xs={2} md={2}>
                    <CardContent
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}
                    >
                            <img src={image.path}
                            />
                            <br />
                            {image.description}
                    </CardContent>
                        <br />
                                Likes: {likes} 
                                <Button
                                variant="outlined"
                                onClick={((e) => likePhoto(e))}>
                                    Like</Button>
            </Grid>
    );
}

export default GalleryItems;