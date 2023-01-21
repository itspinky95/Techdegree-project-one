/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

  /*** 
 * `quotes` array 
***/

const quotes = [
  {quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", source: 'Dr. Seuss', tag: 'Author' },
  {quote: "Never let the fear of striking out keep you from playing the game.", source: 'Babe Ruth', tag: 'Baseball Player' },
  {quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.", source: 'Winston S. Churchill', tag: 'UK Prime Minister' },
  {quote: "The question isn't who is going to let me; it's who is going to stop me.", source: 'Ayn Rand', tag: 'Writer' },
  {quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.", source: 'Steve Jobs', citation: 'at Stanford University', year: '2005', tag: 'Entrepreneur'},
  {quote: "Only a life lived for others is a life worthwhile.", source: 'Albert Einstein', tag: 'Scientist'},
  {quote: "Great things in business are never done by one person.", source: 'Steve Jobs', citation: 'Biography', year: '2003', tag: 'Entrepreneur'},
  {quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", source: 'Maya Angelou', tag: 'Menmoirist'}
];

// console.log(quotes)

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
};

/*
 * setting colour of background
*/
const colors = ['red', 'blue', 'violet', 'hotpink', 'brown', 'purple', 'green', 'orange', 'gray', 'babyblue'];

/***
 * `printQuote` function
***/

function printQuote() {
  document.body.style.backgroundColor = getRandomColor();
  let quote = getRandomQuote();
  let html = `<p class="quote">${quote.quote}</p>
   <p class="source">${quote.source}`
  if (quote.citation !== undefined) {
    html += `<span class ="citation">${quote.citation}</span>`;
  }
  if (quote.year !== undefined) {
    html += `<span class = "year">${quote.year}</span>`;
  }
  if (quote.tag !== undefined) {
    html += `<span class = "tag">, ${quote.tag}</span>`;
  }
  `</p>`

  return (document.getElementById("quote-box").innerHTML = html);
}

// generates a random color from the colors array on button click

function getRandomColor() {
  return colors[Math.floor(Math.random() * 9)]
}
// interval to rotate between color and quotes, set for five seconds
setInterval(printQuote, 15000);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);