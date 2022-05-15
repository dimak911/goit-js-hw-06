function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputValueRef = document.querySelector('#controls input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesContainerRef = document.querySelector('#boxes');

let amountValue = 0;
createBtnRef.addEventListener('click', getAmount);

function getAmount() {
  amountValue = Number(inputValueRef.value);
}

console.log(amountValue);

// const elements = [];

// for (let index = 0; index < Number(inputValueRef.value); index++) {
//   const element = array[index];
// }
