function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color');
const changeColorEl = document.querySelector('.change-color');

changeColorEl.addEventListener('click', changeColorRandom);

function changeColorRandom() {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  colorEl.textContent = getRandomHexColor();
}
