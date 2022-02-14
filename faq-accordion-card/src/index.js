const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    let question = accordion.querySelector(".question span");
    let icon = accordion.querySelector(".question img");
    let answer = accordion.querySelector(".answer");

    answer.classList.toggle("hide");
    icon.classList.toggle("icon-active");
    question.classList.toggle("question-active");
  });
});
