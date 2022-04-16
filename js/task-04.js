let checkValue = 0;

const valueEl = document.querySelector('#value');
const decrem = document.querySelector('button[data-action="decrement"]');
const increm = document.querySelector('button[data-action="increment"]');

const checkDecrem = function () {
  checkValue -= 1;
  valueEl.textContent = checkValue;
};

const checkIncrem = function () {
  checkValue += 1;
  valueEl.textContent = checkValue;
};

decrem.addEventListener('click', checkDecrem);
increm.addEventListener('click', checkIncrem);
