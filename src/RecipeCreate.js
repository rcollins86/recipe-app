import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
    const intialInputsState = {
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: ""
    }
  
  const [inputs, setInputs] = useState(intialInputsState);
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [rating, setRating] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(inputs);
    setInputs(intialInputsState)
  }
  
//   const handleChange = ({target}) => {
//     switch(target.id) {
//       case name:
//         setName(target.value);
//         break;
//       case cuisine:
//         setCuisine(target.value);
//         break;
//       case photo:
//         setPhoto(target.value);
//         break;
//       case rating:
//         setRating(target.value);
//         break;
//       case ingredients:
//         setIngredients(target.value);
//         break;
//       case preparation:
//         setPreparation(target.value);
//         break;
//     }
//   } 
  
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">Name: </label>
              <input 
                type="text"
                id="name"
                name="name"
                required={true}
                onChange={handleChange}
                value={inputs.name}
              />
            </td>
            <td>
              <label htmlFor="cuisine">Cuisine: </label>
              <input 
                type="text"
                id="cuisine"
                name="cuisine"
                required={true}
                onChange={handleChange}
                value={inputs.cuisine}
              />
            </td>
            <td>
              <label htmlFor="photo">Photo: </label>
              <input 
                type="text"
                id="photo"
                name="photo"
                required={true}
                onChange={handleChange}
                value={inputs.photo}
              />
            </td>
            <td>
              <label htmlFor="ingredients">Ingredients: </label>
              <textarea
                id="ingredients"
                name="ingredients"
                required={true}
                onChange={handleChange}
                value={inputs.ingredients}
              />
            </td>
            <td>
              <label htmlFor="preparation">Preparation: </label>
              <textarea
                id="preparation"
                name="preparation"
                required={true}
                onChange={handleChange}
                value={inputs.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
