import shuffle from "shuffle-array";
import "./style.css";
import data from "./data.json";
import Card from "./Card";

// MARK: DOM
import { inputEl, cardsRow, yearEl } from "./domSelection";

// Functions
function showCards(data) {
  const fragment = document.createDocumentFragment(); // Performance

  data.forEach((car) => {
    const card = Card(car);
    fragment.appendChild(card);
  });

  cardsRow.appendChild(fragment);
}

// Event Listeners
inputEl.addEventListener("input", (e) => {
  console.log(e.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  showCards(shuffle(data));
});

// IIFE
(function () {
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
})();
