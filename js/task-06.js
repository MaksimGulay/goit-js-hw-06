const textInput = document.querySelector("#validation-input")

textInput.addEventListener("blur", () => {
const dataLenght = Number(textInput.getAttribute("data-length"));
const inputValue = textInput.value.length;

if (dataLenght === inputValue) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
} else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
}
});