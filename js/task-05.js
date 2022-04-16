const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', newInput);

function newInput(elem) {
  spanEl.textContent = elem.currentTarget.value;

  if (elem.currentTarget.value === "") {
    spanEl.textContent = 'Anonymous';
  }
};
