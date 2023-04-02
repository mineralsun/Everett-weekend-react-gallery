import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryItem from './GalleryItem.jsx';

function GalleryList() {

    const [listOfImages, setListOfImages] = useState([]);

    const fetchGalleryList = () => {
        axios.get('/gallery').then((response) => {
            setListOfImages(response.data);
        }).catch((error) => {
            console.log(`Error in GET ${error}`);
            alert('Something went wrong!');
        });
    }

    useEffect(() => {
        fetchGalleryList();
    }, []);

    return (
        <>
        
        </>
    )


}

export default GalleryList;