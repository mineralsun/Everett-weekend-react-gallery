import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryItems from './GalleryItems.jsx';
const galleryItems = '/modules/gallery.data.js';


function GalleryList({listOfImages}) {

    return (
        <>
        {
        listOfImages.map((image => (
                <GalleryItems 
                    key={image.id}
                    image={image}
                />
            )))
        }
        </>
    )


}

export default GalleryList;