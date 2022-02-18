const button = document.getElementById("new-advice-button");
const adviceId = document.getElementById("advice-id");
const adviceContent = document.getElementById("advice-content");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceId.innerHTML = data.slip.id;
      adviceContent.innerHTML = data.slip.advice;
    });
}

button.addEventListener("click", getAdvice);
