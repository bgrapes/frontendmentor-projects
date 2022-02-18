const button = document.querySelector("button");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

button.addEventListener("click", getAdvice);
