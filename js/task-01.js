
/*const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);

const categoriesArray = [...allCategories]
  .map(
    categories => `Category: ${categories.children[0].textContent}
    Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);*/

const allCategories = document. querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach(item =>{
  console.log('Category:', item.firstElementChild.textContent)
  
const itemList = item.querySelectorAll('li');
console.log('Elements:', itemList.length);
});
