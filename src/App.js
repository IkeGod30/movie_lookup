
import './App.css';
import { TVShowAPI } from './Data/Data';
import { Searchbar } from './components/searchbar';



TVShowAPI.fetchPopulars();

function App() {
  return (
    <div className="App">
      <h1>Popular TV Show Lookup</h1>
      <Searchbar />

      {/* <form className="d-flex container" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}




      {/* <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
