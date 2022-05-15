const colorValueRef = document.querySelector('.color');
const changeColorBtnRef = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtnRef.addEventListener('click', changeBodyBgColor);

function changeBodyBgColor() {
  colorValueRef.textContent = getRandomHexColor();
  document.body.style.backgroundColor = `${colorValueRef.textContent}`;
}
