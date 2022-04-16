const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener("input", fz);
textEl.style.fontSize = `${inputEl.value}px`;

function fz(event) {
  textEl.style.fontSize = `${event.target.value}px`;
}