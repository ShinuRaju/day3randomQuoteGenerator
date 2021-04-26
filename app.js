import { quoteArray } from "./quote.js";

let quoteContainer = document.querySelector(".container .quote-container");

let p = document.querySelector(".quote-container p");
let btn = Array.from(document.getElementsByTagName("button"));

let randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

p.textContent = quoteArray[randomNumber(0, 100)];

btn.forEach((eachElement) => {
  eachElement.addEventListener("click", () => {
    p.textContent = quoteArray[randomNumber(0, 100)];
    quoteContainer.style.backgroundImage = `url(https://picsum.photos/500?random=${randomNumber(
      0,
      100
    )})`;
  });
});
