import React from 'react';
import axios from 'axios';


function GalleryItems({ image, fetchGalleryList }) {
    // TODO : MAKE AN ARROW FUNCTION TO LIKE PHOTOS (PUT REQUEST)

    const likePhoto = (e) => {
        axios.put(`/gallery/like/:${image.id}`).then((response) => {
            console.log(`Liked this photo!`);
            image.likes += 1;
            fetchGalleryList();
        }).catch((error) => {
            console.log(`Error in PUT ${error}`);
            alert('Something went wrong')
        });
    }


    return (
        <div>
            <img
                src={image.path}
            />
            <div>
                Likes: {image.likes} <button onClick={((e) => likePhoto(e))}>Like</button>
            </div>
        </div>

    );
}

export default GalleryItems;