const allCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach(elem => {
  const textHeadingContentRef = elem.querySelector('.item h2').textContent;
  const numberOfListItems = elem.querySelectorAll('.item li').length;
  console.log(''); //пустая строка, чтобы output был строго по ТЗ :)
  console.log(`Category: ${textHeadingContentRef}`);
  console.log(`Elements: ${numberOfListItems}`);
});
