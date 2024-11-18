import "./style.css";
import data from "./data.json";
console.log(data);

// MARK: DOM
const yearEl = document.querySelector(".year");

// We should first log all the car names
// filter (when we want to filter out based on some condition)
// map (when we need a new array)
// forEach when we want to run a function for every

data.forEach((obj) => console.log(obj.name));

// IIFE
(function () {
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
})();
