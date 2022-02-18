import "animate.css";

const container = document.querySelector(".advice-generator");
const button = document.getElementById("new-advice-button");
const adviceId = document.getElementById("advice-id");
const adviceContent = document.getElementById("advice-content");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      animate();
      adviceId.innerHTML = data.slip.id;
      adviceContent.innerHTML = data.slip.advice;
    });
}

function animate() {
  container.classList.add("animate__animated", "animate__fadeIn");
  container.addEventListener("animationend", () => {
    container.classList.remove("animate__animated", "animate__fadeIn");
  });
}

button.addEventListener("click", getAdvice);
