const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (const ingredient of ingredients) {
  const ingredientsList = document.getElementById("ingredients");

  const liElement = document.createElement("li");

  liElement.classList.add("item");

  liElement.textContent = ingredient;

  ingredientsList.append(liElement);
}
