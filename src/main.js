import shuffle from "shuffle-array";
import "./style.css";
import data from "./data.json";
import Card from "./Card";

// MARK: DOM
const cardsRow = document.querySelector("#cards-row");
const yearEl = document.querySelector(".year");

// Performance
const fragment = document.createDocumentFragment();

shuffle(data).forEach((car) => {
  const card = Card(car);
  fragment.appendChild(card);
});

cardsRow.appendChild(fragment);

// IIFE
(function () {
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
})();
