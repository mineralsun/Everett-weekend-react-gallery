import React from 'react';
import axios from 'axios';


function GalleryItems({ image }) {
    // TODO : MAKE AN ARROW FUNCTION TO LIKE PHOTOS (PUT REQUEST)



    return (
        <div>
        <img
            src={image.path}
        />
        </div>
    );
}

export default GalleryItems;