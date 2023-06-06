const liElem = document.querySelectorAll(".item");

const quantityLi = liElem.length;
console.log(`Number of categories: ${quantityLi}`);

liElem.forEach((el) =>
  console.log(
    `Category: ${el.firstElementChild.textContent}, Elements: ${el.children[1].children.length}`
  )
);
