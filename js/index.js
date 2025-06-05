console.log("all works");

const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

answerButton.addEventListener("click", () => {
  answer.classList.toggle("hidden");

  if (answer.classList.contains("hidden")) {
    answerButton.textContent = "Show Answer";
  } else {
    answerButton.textContent = "Hide Answer";
  }
});
