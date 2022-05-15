let counterValue = 0;
const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

decrementRef.addEventListener('click', decrementValue);

function decrementValue() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

incrementRef.addEventListener('click', incrementValue);

function incrementValue() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}
