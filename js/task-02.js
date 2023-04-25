const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients");
const ingredientsMap = ingredients.map(str => {
  let ingredient = document.createElement("li");
  ingredient.textContent = str;
  return ingredient;
})
ingredientsList.append(...ingredientsMap);