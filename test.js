/* Simple script in JavaScript that uses the readline module to read 
input from the user and output the sum of two integers */

const readline = require('readline'); // built-in module to read user input

const rl = readline.createInterface({
  input: process.stdin, // standard input stream (user input)
  output: process.stdout // standard output stream (user output)
});

rl.question('Enter first integer: ', (num1) => { // print message and wait for user input
  rl.question('Enter second integer: ', (num2) => { // print message and wait for user input
    const sum = parseInt(num1) + parseInt(num2); // parse user input into integers and calculate sum
    console.log(`The sum is: ${sum}`); // print sum to user
    rl.close(); // close the readline interface when done
  });
});

// execute the script using 'node test.js' on the command line
