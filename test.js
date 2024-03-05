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
});// execute the script using 'node test.js' on the command line


// Test cases
// Run through a series of test cases to verify the output of the script

const testCases = [
  { input1: '1', input2: '2', expected: 3 },
  { input1: '-3', input2: '4', expected: 1 },
  { input1: '0', input2: '0', expected: 0 },
  { input1: '100', input2: '-50', expected: 50 }
];

testCases.forEach((testCase) => {
  rl.question(`Enter first integer (${testCase.input1}): `, (num1) => { // Ask for input and pass to next function
    rl.question(`Enter second integer (${testCase.input2}): `, (num2) => { // Ask for input and pass to next function
      const sum = parseInt(num1) + parseInt(num2); // Calculate sum
      if (sum === testCase.expected) { // Check if sum matches expected output
        console.log(`Test passed: ${sum}`); // If so, print success message
      } else { // If not, print failure message and expected vs. actual
        console.log(`Test failed: Expected ${testCase.expected}, got ${sum}`);
      }
      rl.close(); // Close the readline interface when done
    });
  });
});

