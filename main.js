const autorQuote = document.querySelector(".autor-quote");
const tags = document.querySelector(".tags");
const quoteText = document.querySelector(".quote-text");
const btnRandom = document.querySelector(".random-btn");
const btnShare = document.querySelector(".share-btn");
const quoteCard = document.querySelector(".quote-card");

const url = "";
// Simular carga 
setTimeout(() => {
  quoteCard.classList.remove("loading");
}, 2500);
