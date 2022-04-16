const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener("blur", onBlur);

function onBlur(elem) {
  const input = elem.currentTarget;
  const inputLength = Number(input.dataset.length);

  if (input.value.length === inputLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}