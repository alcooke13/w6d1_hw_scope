// Episode 1

// ```js
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);
// ```
// Murderer = Miss Scarlet

// Episode 2

// ```js
// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

/* 
It won't work. murderer variable was set using const -> changed murderer tried to reassign the variable
which it can't do. Murderer should still be professor plum.
*/

// Episode 3

// ```js
// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

/* 
First verdict will be Mrs. Peacok. In declareMurderer function murderer variable has been reassigned
to Mrs. Peacock from prof. Plum
Second verdict will be prof. Plum as in global scope the murderer variable is prof plum and has 
only been set to Mrs. Peacock in the scope of the firstVerdict variable.
2nd Verdict doesn't have the declareMurderer function which reasigns the value in murderer variable
*/

// Episode 4

// ```js
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

/* 
suspects will be Miss Scarlet, Prof. Plum and Col Mustard. As the declareAllSuspects function is used on the variable suspects which
reassigns suspect 3 within the scope of this variable.
suspect 3 is Mrs. Peacok is still on the global scope unaffected by function saved in suspects
*/

// Episode 5

// ```js
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

/* 
Weapon will be changed to revolver. Even though scenario was set using const. The value is an object which is mutable
therefor we are able to access it and reassign it using the changeWeapon function. 
*/

// Episode 6

// ```js
// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

/* The murderer will be Mrs. White as it is reassigned using the changeMurderer function initially to Mr. Geen but then
inside the function is another function which reassigns it to Mrs. White.
 */

// Episode 7

// ```js
// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

/*
The murderer variable value is reassigned to be Mr. Green from the changeMurderer funciton. Plot twist creates a new murderer
variable inside this scope which does not affect the murderer variable outside of this scope. Using the unexpectedOutcome function
which reassigns the local variable of murderer to Miss Scarlet but the global scope variable of murderer is still not affected. 
*/

// Episode 8

// ```js
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);
// console.log(scenario.murderer)

/*
changeScenario function reassigns the murderer and room to mrs Peacock and dining room. unexpectedOutcome function is called with
colonel mustard as an argument. The which checks if the room is dinining room, which it is from the earlier function. Which reassigns
the murderer weapon to candle stick. Then the plotTwist function is called with dining room as an argument to reassign the murderer to 
col mustard. 
*/

// Episode 9

// ```js
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

/*
Murderer is prof. Plum, in the if statement it created a local variable to be mrs peacock instead of reassigning the murderer
variable with prof. Plum. 
*/