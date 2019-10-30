import React from 'react';
import './App.css';

const App =() => {

  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`;

  return(
    <div className="App">
      <form className="Search-Form">
        <input type="text"></input>
        <button type="submit">Get Recipe</button>
      </form>
    </div>
  )
}

export default App;
