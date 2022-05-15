const rangeInputRef = document.querySelector('#font-size-control');
const outputTextRef = document.querySelector('#text');

rangeInputRef.addEventListener('input', changeFontSize);

function changeFontSize() {
  outputTextRef.style.fontSize = rangeInputRef.value + 'px';
}
