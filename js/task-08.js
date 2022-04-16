const formEl = document.querySelector('.login-form');

function checkSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert ("All fields must be filled")
  }

  const result = { email: email.value, password: password.value };
  console.log(result);
  event.currentTarget.reset();
}

formEl.addEventListener("submit", checkSubmit);
