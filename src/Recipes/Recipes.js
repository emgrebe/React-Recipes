import React from 'react';
import style from './Recipes.module.css';

const Recipes = ({title, calories, image, ingredients}) => {
  return(
    <div className={style.recipe}>
      <h1>{title}</h1>
      <h5>Ingredients</h5>
      <ul>
        {ingredients.map(ingredient =>(
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>{calories} Calories</p>
      <img className={style.image} src={image} alt=""></img>
    </div>
  );
};

export default Recipes;