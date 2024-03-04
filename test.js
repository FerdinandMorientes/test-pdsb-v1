/* Simple script in JavaScript that uses the readline module to read 
input from the user and output the sum of two integers */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter first integer: ', (num1) => {
  rl.question('Enter second integer: ', (num2) => {
    const sum = parseInt(num1) + parseInt(num2);
    console.log(`The sum is: ${sum}`);
    rl.close();
  });
}); // execute using 'node test.js'