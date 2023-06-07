const background = document.querySelector('body');
const buttonChangeColor = document.querySelector('.change-color');
const spanValueColor = document.querySelector('.color')

buttonChangeColor.addEventListener('click', () => {
background.style.backgroundColor = getRandomHexColor();
spanValueColor.textContent = getRandomHexColor();
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
