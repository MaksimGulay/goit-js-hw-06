let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector('#value');

decrementButton.addEventListener('click', () => {
    counterValue--;
    spanValue.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
    counterValue++;
    spanValue.textContent = counterValue;
});
