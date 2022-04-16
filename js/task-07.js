const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener("input", fz);

function fz(x) {
  textEl.style.fontSize = `${x.target.value}px`;
}