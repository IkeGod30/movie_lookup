
import './App.css';
import { TVShowAPI } from './Data/Data';
import { Searchbar } from './components/searchbar';
import { useState, useEffect } from 'react';



TVShowAPI.fetchPopulars();

function App() {

    const [currentTVShow, setcurrentTVShow] = useState();
  
    async function fetchByTitle(title) {
      const searchResponse = await TVShowAPI.fetchByTitle(title);
      if(searchResponse.length>0) {
      setcurrentTVShow(searchResponse[0])
      }
    }

    useEffect(() => {
      fetchByTitle();
      }, []);
  
  
  return (
    <div className="App">
      <h1>Popular TV Show Lookup</h1>
      <Searchbar />

    </div>
  );
}

export default App;
