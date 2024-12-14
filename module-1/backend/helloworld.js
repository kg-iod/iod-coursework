const Sentiment = require('sentiment');

const sentiment = new Sentiment();

const result = sentiment.analyze('Cats are really super great and awful.');

console.log(result);

// function sum(a, b) {
//   return a + b;
// }

function multiply(num1, num2) {
  return num1 * num2;
}

const product = multiply(5, 0);

// console.log(product);
