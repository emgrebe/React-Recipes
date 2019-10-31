import React from 'react';

const Recipes = ({title, calories, image}) => {
  return(
    <div>
      <h1>{title}e</h1>
      <p>{calories}</p>
      <img src={image} alt=""></img>
    </div>
  )
}

export default Recipes;