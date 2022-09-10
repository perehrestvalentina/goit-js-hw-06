const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

/*let ulList = document.getElementById("ingredients");
console.log(ulList);
const foodIngredients = ingredients.forEach(ingredient => {
  let items = document.createElement("li");
  items.innerHTML = ingredient;
  ulList.append(items);
  parent.append(...items)
});

console.log(foodIngredients);*/
/*const addIngredient = ingredients.map( option => {
  const createingredient = document.createElement("li");
  createingredient.textContent = option;
  return createingredient;
});
console.log(addIngredient);
allIngredients.append(...addIngredient);*/

const buildIngredients = () => {
    const allIngredients = document.querySelector("ul#ingredients");
     for (const ingredient of ingredients) {
       const createingredient = document.createElement("li");
       createingredient.textContent = ingredient;
       allIngredients.appendChild(createingredient);
     }
     console.log(allIngredients);
   };
   buildIngredients();