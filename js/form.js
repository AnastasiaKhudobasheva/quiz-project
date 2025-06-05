const form = document.querySelector('[data-js="card-form"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = form.question.value;
  const answer = form.answer.value;
  const tag = form.tag.value;
  const card = document.createElement("section");
  card.classList.add("card");

  const cardQuestion = document.createElement("h2");
  cardQuestion.className = "card__question";
  cardQuestion.textContent = question;

  const answerButton = document.createElement("button");
  answerButton.className = "card__show-answer";
  answerButton.textContent = "Show Answer";

  const cardAnswer = document.createElement("article");
  cardAnswer.className = "card__answer";
  cardAnswer.textContent = answer;
  cardAnswer.hidden = true;

  answerButton.addEventListener("click", () => {
    cardAnswer.hidden = !cardAnswer.hidden;
    answerButton.textContent = cardAnswer.hidden
      ? "Show Answer"
      : "Hide Answer";
  });

  const cardTag = document.createElement("span");
  cardTag.className = "card__tags-tag";
  cardTag.textContent = tag;

  card.appendChild(cardQuestion);
  card.appendChild(answerButton);
  card.appendChild(cardAnswer);
  card.appendChild(cardTag);

  cardContainer.appendChild(card);

  form.reset();
});

const questionInput = document.querySelector('[data-js="question-input"]');
const questionCount = document.querySelector('[data-js="question-count"]');
const answerInput = document.querySelector('[data-js="answer-input"]');
const answerCount = document.querySelector('[data-js="answer-count"]');

questionInput.addEventListener("input", (event) => {
  const maxLength = event.target.maxLength;
  const currentLength = event.target.value.length;
  const charactersLeft = maxLength - currentLength;
  questionCount.textContent = `${charactersLeft} characters left`;
});

answerInput.addEventListener("input", (event) => {
  const maxLength = event.target.maxLength;
  const currentLength = event.target.value.length;
  const charactersLeft = maxLength - currentLength;
  answerCount.textContent = `${charactersLeft} characters left`;
});

// function updateCharacterCount(inputElement, counterElement) {
//   const maxLength = inputElement.maxLength;
//   const currentLength = inputElement.value.length;
//   const charactersLeft = maxLength - currentLength;
//   counterElement.textContent = `${charactersLeft} characters left`;
// }

// questionInput.addEventListener("input", () => {
//   updateCharacterCount(questionInput, questionCount);
// });

// answerInput.addEventListener("input", () => {
//   updateCharacterCount(answerInput, answerCount);
// });
