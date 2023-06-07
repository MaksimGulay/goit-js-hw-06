const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log ('Number of categories:', categoriesItems.length);

categoriesItems.forEach (item => {
    const categoriName = item.querySelector('h2').textContent;
    const categoriElements = item.querySelectorAll('li').length;

    console.log ('Category:', categoriName);
    console.log ('Elements:', categoriElements);
});