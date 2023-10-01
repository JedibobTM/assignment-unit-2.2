// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a string variable named name and set it to the value of 'Dane'.
// We then see, through in if/else conditional, if the name is equal to 'Mary' through a boolean check.
// If 'name' is equal to 'Mary', console.log 'Hi, Mary!' Otherwise, console.log 'How do you do?
// 'Dane' is not equal to 'Mary', setting the conditional to false, therefore, console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Create an empty variable called 'secret', and a variable called 'code', and set 'code' to 123.
// Set a conditional that checks a boolean to see if 'code' is 123.
// The boolean is true, so 'secret' gets set to 'super', and the value of code is doubled, now equaling 246.
// Then, check to see if 'code' is greater than 250.
// 246 is not high enough, therefore failing the check.
// console.log 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Create three variables: a boolean, called 'isStudent' set to true; 
// 'age', set to the value of 34; zip, set to the value of 55407.
// Check to see if 'isStudent' is true AND 'zip' is greater than 80000
// If the conditions are met, console.log 'You're a student on the west coast!'. However, 'zip' is lesser than 8000.
// Now we check if 'isStudent' is false OR age is under 30. If met, console.log 'What are your hobbies?'
// 'isStudent' is true, however, so now we check if 'isStudent' is true. 
// Otherwise, if none of the conditions are met, console.log 'How about the weather?'
// 'isStudent' is true, therefore console.log 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';

// FIX - Set colorOne to 'blue', not 'red' and set colorTwo should be set to 'red'

let mix = true;

if (mix === true) {
  colorOne = 'purple';
  // FIX - Set colorTwo to 'purple'
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  // FIX - Conditional should contain && instead of ||
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  // FIX - you could do it this way, just get rid of the equals sign and you get the intended result
  console.log('no entry');
} else {
  console.log('enter');
}
*/

