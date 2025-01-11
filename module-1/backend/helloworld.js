const Sentiment = require('sentiment');

const sentiment = new Sentiment();

const result = sentiment.analyze('Cats are really super great and awful.');

console.log(result);

let name = 'Kendrick';
const age = 100;

if (age === 100) {
  name = 'Bob';
}

// function sum(a, b) {
//   return a + b;
// }

function multiply(num1, num2) {
  return num1 * num2;
}

const product = multiply(5, 0);

console.log(product);

// const emptyScores = [];

const rivers = ['Mississippi', 'Amazon', 'Nile'];
const lastRiver = rivers.pop();
