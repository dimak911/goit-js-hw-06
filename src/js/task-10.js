function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputValueRef = document.querySelector('#controls input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesContainerRef = document.querySelector('#boxes');

createBtnRef.addEventListener('click', addBoxes);
destroyBtnRef.addEventListener('click', removeBoxes);

function addBoxes() {
  createBoxes(inputValueRef.value);
}

function createBoxes(amount) {
  const boxesEl = [];
  let divSize = 30;
  for (let index = 0; index < amount; index++) {
    const newBoxEl = document.createElement('div');
    newBoxEl.style.width = `${divSize}px`;
    newBoxEl.style.height = `${divSize}px`;
    newBoxEl.style.backgroundColor = getRandomHexColor();
    boxesEl.push(newBoxEl);
    divSize += 10;
  }
  boxesContainerRef.append(...boxesEl);
}

function removeBoxes() {
  boxesContainerRef.innerHTML = '';
  // inputValueRef.value = ''; // Очистка инпута
}
