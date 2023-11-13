import React from "react";

/**
 * Displays the form to create a new post, which can be either an image or a text post.
 *
 * When the form is submitted, a new post is created and the form contents cleared.
 */
function RecipeItem(props) {
  const {
    name,
    cuisine,
    photo,
    ingredients,
    preparation
  } = props.recipe;
  
  const {deleteRecipe} = props;
  
  return (
    <tr className="recipe">
      <td>{name}</td>
      <td>{cuisine}</td>
      <td><img src={photo}/></td>
      <td>{ingredients}</td>
      <td>{preparation}</td>
      <td>
        <button onClick={deleteRecipe} name="delete">Delete</button>
      </td>
    </tr>
  ) 
}

export default RecipeItem;