import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryItems from './GalleryItems.jsx';
const galleryItems = '/modules/gallery.data.js';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


function GalleryList({listOfImages, fetchGalleryList }) {

    return (
        <Grid container spacing={2}>
        {
        listOfImages.map((image => (
                <GalleryItems 
                    key={image.id}
                    image={image}
                    fetchGalleryList={fetchGalleryList}
                />
            )))
        }
        </Grid>
    )


}

export default GalleryList;