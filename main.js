const autorQuote = document.querySelector(".autor-quote");
const tag1 = document.querySelector(".tags:nth-child(1)");
const tag2 = document.querySelector(".tags:nth-child(2)");
const quoteText = document.querySelector(".quote-text");
const btnRandom = document.querySelector(".random-btn");
const btnShare = document.querySelector(".share-btn");
const quoteCard = document.querySelector(".quote-card");
var arrQuote = [];
const url = "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascript/challenges/group_1/data/random-quotes.json";
// const url = "https://api.quotable.io/quotes";
// Simular carga 
// setTimeout(() => {
//   quoteCard.classList.remove("loading");
// }, 2500);
//   {
//     "author": "Mark Twain",
//     "quote": "The secret of getting ahead is getting started.",
//     "tags": ["motivation", "success"]
//   },
const random = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const quoteActual = -1;
function actualizarQuote(){
    let numRandom = random(0, arrQuote.length);
    const q = arrQuote[numRandom];
    if (numRandom != quoteActual) {
        autorQuote.textContent = q.author;
        tag1.textContent = q.tags[0];
        tag2.textContent = q.tags[1];
        quoteText.textContent = q.quote;        
    }
    quoteActual = numRandom;
}
quoteCard.classList.add("loading");
fetch(url)
    .then((res) => res.json())
    .then((data) => { 
        arrQuote =  data;
        console.log(arrQuote)
        quoteCard.classList.remove("loading");
        actualizarQuote();
        
        
    })
    .catch((error)=> {
    })

btnRandom.addEventListener("click", actualizarQuote)