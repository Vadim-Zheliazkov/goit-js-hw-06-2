// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

// const inputFindEmail = inputs.firstElementChild.firstElementChild;

// inputFindEmail.classList.add("email");

// const inputClassEmail = document.querySelector(".email");
// console.log(inputClassEmail);

// const inputFindPassword =
//   inputs.firstElementChild.nextElementSibling.firstElementChild;

// inputFindPassword.classList.add("password");

// const inputClassPassword = document.querySelector(".password");
// console.log(inputClassPassword);

// const button = inputs.lastElementChild;

// button.classList.add("btn");
// const buttonSubmit = document.querySelector(".btn");
// console.log(buttonSubmit);

const inputs = document.querySelector(".login-form");
// console.log(inputs);
inputs.addEventListener("submit", checkFormsSubmit);

function checkFormsSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    console.log(`Login: ${email.value}, Password: ${password.value}`);
  }

  event.currentTarget.reset();
}
