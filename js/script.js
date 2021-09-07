/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
  * array to store quote information objects
***/

const quotes = [
  {
    quote: "JASON! JASON! JAAAAASON!!",
    source: "Ethan",
    citation: "Heavy Rain",
    year: 2010,
    tag: "humor",
  },
  {
    quote: "What, you egg?",
    source: "Macbeth's Henchman",
    citation: "Macbeth",
    year: 1606,
    tag: "humor",
  },
  {
    quote: "Every problem you have today will be a problem tomorrow, and if it's a problem for tomorrow you don't have to worry about it today.",
    source: "Asmongold",
    tag: "humor",
  },
  {
    quote: "If you knew success was a certainty, what would you attempt to do?",
    source: "Mr. Vance Hinds",
    tag: "inspiration",
  },
  {
    quote: "And the dirt that they threw on my name turned to soil and I grew up out it.",
    source: "Drake",
    citation: "Fair Trade",
    year: 2021,
    tag: "rap",
  }
]

/***
 * get a random number
***/

function getRandomNumber(min, max) {
  let num = Math.floor( Math.random() * max) + min;
  return num;
}

/***
 * get a random quote object from the quote object array
***/

function getRandomQuote() {
  let random = getRandomNumber(0, quotes.length);
  return quotes[random];
}

/***
 * get random color
***/

function randomColor() {
  document.getElementById('body').style.backgroundColor = `rgb(${getRandomNumber(0,255)},${getRandomNumber(0,255)},${getRandomNumber(0,255)})`;
}

/***
 * put together a string of quote information to insert into the DOM
***/

let lastQuote = getRandomQuote(); // store the last quote displayed

function printQuote() {
  let quote = getRandomQuote();
  if (quote === lastQuote) { // check if the generated quote is the same as the last
    quote = getRandomQuote(); // if not generate a new one
  } else {
    lastQuote = quote; // otherwise set the new last used quote
  }
  let quoteString = `
  <p class="quote"> ${quote.quote} </p>
  <p class="source"> ${quote.source}`;
  if (quote.citation) {
    quoteString += `<span class="citation">${quote.citation}</span>`;
  }
  if (quote.year) {
    quoteString += `<span class="year">${quote.year}</span>`;
  }
  if (quote.tag) {
    quoteString += `<span class="tag">${quote.tag}</span>`;
  }
  quoteString += "</p>";
  randomColor(); // make the background of the body a random color
  document.getElementById('quote-box').innerHTML = quoteString; // insert the quote
  return quoteString;
}

/***
 * generate new quote after 20 seconds
***/

setInterval(printQuote, 20000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);