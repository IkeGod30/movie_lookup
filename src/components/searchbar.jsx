import React, {useState} from 'react';
import { TVShowAPI } from '../Data/Data';



export function Searchbar( { onSubmit }) {

    function submit(e) {
        console.log(e.target.value);

    }
    const [searchInput, setsearchInput] = useState("");
    
    // { TVShowAPI };
    return(
        <div>
        <form className="d-flex container" role="search">
        <input onKeyUp={submit} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
       
      </form>
      
        </div>
    )
}