const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input', printInput);

function printInput() {
  nameOutputRef.textContent = nameInputRef.value;
  if (!nameInputRef.value) {
    nameOutputRef.textContent = 'Anonymous';
  }
}
