const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listForUl = document.querySelector("#ingredients");
// const listLi = ingredients.forEach((el) => {
//   const liElement = document.createElement("li");
//   liElement.classList.add("item");
//   liElement.textContent = el;

//   listForUl.prepend(liElement);
//
// });

const array = [];

const listLi = ingredients.map((el) => {
  const liElement = document.createElement("li");
  liElement.classList.add("item");
  liElement.textContent = el;
  array.push(liElement);
});
console.log(...array);

listForUl.append(...array);