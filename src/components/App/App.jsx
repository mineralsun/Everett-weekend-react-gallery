import { useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import GalleryList from '../GalleryList/GalleryList.jsx';
import GalleryItems from '../GalleryList/GalleryItems.jsx';


function App() {

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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList 
          listOfImages={listOfImages}
          fetchGalleryList={fetchGalleryList}
        />
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
