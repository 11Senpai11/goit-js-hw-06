const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const unpackedList = ingredients.map((ingredient) => {
  let list = document.createElement("li");
  list.textContent = ingredient;
  list.classList.add("item");
  return list;
});

ingredientsList.append(...unpackedList);
