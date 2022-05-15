const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listRef = document.querySelector('#ingredients');

const items = [];
ingredients.forEach(elem => {
  const item = document.createElement('li');
  item.textContent = elem;
  item.classList.add('item');
  items.push(item);
});

listRef.append(...items);
