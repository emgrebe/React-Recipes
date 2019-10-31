import React, {useEffect, useState} from 'react';
import './App.css';
import Recipes from './components/Recipes';

const App =() => {

  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  return(
    <div className="App">
      <form className="Search-Form">
        <input type="text"></input>
        <button type="submit">Get Recipe</button>
      </form>
      {recipes.map(recipe =>(
        <Recipes 
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
