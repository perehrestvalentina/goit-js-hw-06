const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

    const allIngredients = document.querySelector("#ingredients");

     const listItems = ingredients.map(ingredient =>{const createingredient = document.createElement("li");
       createingredient.classList.add('item');
       createingredient.textContent = `${ingredient}`;
      return createingredient;
     })
     allIngredients.append(...listItems);
 
     
 
  


